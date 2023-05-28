export default function YoutubeVideo(params: embedYoutube) {
  return (
    <div className=" overflow-hidden pt-5">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${params.embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className=" absolute h-full w-full left-0 top-0"
      />
    </div>
  );
}

type embedYoutube = {
  embedId: String;
};
