import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/3dmodels/laptop_stickers2.glb");
  return (
    <>
      <primitive object={gltf.scene} scale={0.5} />
    </>
  );
};

export default function Laptop() {
  return (
    <div className="sm:mt-0 sm:h-full h-[270px]">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 1, 4], fov: 50, zoom: 12 }}>
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
        <OrbitControls autoRotate rotateSpeed={10} />
      </Canvas>
    </div>
  );
}
