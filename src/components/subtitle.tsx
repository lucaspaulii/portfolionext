export default function Subtitle(params: pageSubtitle) {
  return (
    <div className="drop-shadow-md h-10 w-36 flex flex-col items-center justify-center rounded-lg">
      <p className="drop-shadow-md text-center font-bold text-lg sm:text-2xl text-gray-300">
        {params.subtitle}
      </p>
    </div>
  );
}

type pageSubtitle = { subtitle: String };
