import Image from "next/image";

export default function PageTitle(params: pageTitle) {
  return (
    <div className="drop-shadow-md p-3 h-36 sm:mt-4 mb-4 min-w-[10rem] w-full flex flex-col items-center justify-center rounded-lg">
      <p className="text-center font-bold text-2xl sm:text-5xl text-gray-300 [text-shadow:_0_1px_6px_var(--tw-shadow-color)] shadow-black">
        {params.title}
      </p>
    </div>
  );
}

type pageTitle = { title: String };
