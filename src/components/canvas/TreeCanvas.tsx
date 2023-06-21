import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/3dmodels/Cat.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.5} />
    </>
  );
};

export default function Tree() {
  return (
    <div className="sm:mt-0 -mt-44 sm:h-full h-[200px]">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <spotLight
          intensity={0.1}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}
