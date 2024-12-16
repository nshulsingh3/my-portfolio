import Link from "./assets/url.svg";

function Projects() {
  const projects = [
    {
      title: "BlogIt",
      description: "Micro blogging platform",
      link: "https://blogitbyanshul.netlify.app/",
    },
  ];
  return (
    <div className="mt-6 w-[90vw] md:w-[75vw] lg:w-[55vw] flex-col m-auto pb-6">
      <h2 className="text-xl font-bold text-sky-700 text-center md:text-left mb-2">
        {"Projects:"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-indigo-400/[0.5] to-lime-500/[0.2] flex rounded-lg p-4 shadow-md gap-4 items-center"
          >
            <div>
              <div
                className="h-12 w-12 bg-gradient-to-br from-violet-500/[0.8] to-pink-500/[0.7]  rounded-md flex items-center justify-center cursor-pointer"
                onClick={() => window.open(proj.link, "_blank")}
              >
                <div className="text-3xl text-bold text-white cursor-pointer">
                  {proj.title.substring(0, 1)}
                </div>
              </div>
            </div>
            <div className="flex-col gap-2 flex-1">
              <div
                className="text-blue-950 font-bold text-md cursor-pointer"
                onClick={() => window.open(proj.link, "_blank")}
              >
                {proj.title}
              </div>
              <div className="text-blue-950/[0.7] font-bold text-sm cursor-default">
                {proj.description}
              </div>
            </div>
            <div>
              <img
                src={Link}
                className="w-4 stroke-current cursor-pointer"
                onClick={() => window.open(proj.link, "_blank")}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
