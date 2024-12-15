import Profile from "./assets/Profile.jpg";
import Github from "./assets/github.png";
import Linkedin from "./assets/linkedin.png";
import X from "./assets/x.png";

function MainContent() {
  return (
    <div className="flex flex-col md:flex-row-reverse w-[90vw] md:w-[75vw] lg:w-[55vw] items-center justify-around m-auto">
      <img
        src={Profile}
        className="w-40 h-40 md:w-50 md:h-50 rounded-full m-auto mt-4 shadow-lg"
      />
      <div className="flex-col md:flex-1 ">
        <h1 className="text-4xl text-sky-700 font-bold text-center md:text-left mt-4">
          Hey, Anshul here!
        </h1>
        <p className="text-lg text-center mt-2 md:text-left text-gray-500">
          Turning dreams into digital reality,<br></br> one line of code at a
          time.
        </p>
        <div className="flex gap-2.5 mt-4 justify-center md:justify-start items-center">
          <img
            src={Github}
            className="h-5 w-5 cursor-pointer"
            onClick={() =>
              window.open("https://www.github.com/nshulsingh3", "_blank")
            }
          />
          <img
            src={X}
            className="h-5 w-5 cursor-pointer"
            onClick={() =>
              window.open("https://www.x.com/nshulsingh3", "_blank")
            }
          />
          <img
            src={Linkedin}
            className="h-5 w-5 cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.lInkedin.com/in/anshul-singh03",
                "_blank"
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
