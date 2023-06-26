import YoutubeVideo from "./youtubeVideo";
import { motion } from "framer-motion";

export default function VideoModal(props: modal) {
  function handleClickOutside() {
    props.setVideo(false);
  }
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[50] bg-slate-950 bg-opacity-80 w-full h-full"
        onClick={handleClickOutside}
        initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 0.4 }}
      ></motion.div>
      <div className="fixed z-[60] sm:w-1/2 w-full h-1/2 left-auto sm:left-[25vw] top-1/4">
        {typeof props.video === "string" && (
          <YoutubeVideo embedId={props.video} />
        )}
      </div>
    </>
  );
}

type modal = {
  video: String | Boolean;
  setVideo: Function;
};
