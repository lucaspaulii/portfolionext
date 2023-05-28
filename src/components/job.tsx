export default function Job(params: any) {
  const { title, company, period, description } = params;

  return (
    <div className="sm:p-2 p-1 mb-8 rounded-lg relative">
      <h1 className="w-full sm:text-2xl text-lg font-extrabold text-gray-800">
        {title}
      </h1>
      <h2 className="w-full sm:text-xl text-sm font-bold text-gray-800">{company}</h2>
      <p className="w-full sm:text-sm text-xs font-bold text-gray-500 mb-2">{period}</p>
      <p className="sm:text-sm text-xs text-gray-800 whitespace-break-spaces text-justify">{description}</p>
      <div className="rounded-full w-2 h-2 bg-gray-500 absolute top-5 -left-2"></div>
    </div>
  );
}
