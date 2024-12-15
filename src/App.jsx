import Footer from "./Footer";
import MainContent from "./MainContent";
import WhatIDoSection from "./WhatIDoSection";
import Rocket from "./assets/rocket.svg";
import Download from "./assets/download.svg";
import pdf from "./assets/AnshulSinghResume_3YearsExp.pdf";

function App() {
  const handleDownload = () => {
    // Path to your PDF file
    const link = document.createElement("a");
    link.href = pdf;
    link.download = "AnshulSinghResume_3YrsExp.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(120deg, rgb(240,240,240) -14.57%, lightblue 80%, orange 220.57%) no-repeat",
      }}
    >
      <nav className="top-0 bg-gradient-to-b from-cyan-100/[1] to-cyan-100/[0] sticky py-4 pb-10">
        <div className=" p-2 m-auto flex justify-between bg-white/[0.83] w-[95vw] md:w-[60vw] rounded-[36px] shadow-md items-center pl-3">
          <div className="flex-1 hidden md:block"></div>
          <button className="flex-1 hover:bg-white rounded-[36px] md:py-1.5 md:px-3">
            Home
          </button>
          <button className="flex-1  md:hover:bg-white rounded-[36px]  md:py-1.5 md:px-3">
            Blogs
          </button>
          <button
            className="flex-1 flex gap-1 items-center justify-center md:hover:bg-white rounded-[36px]  md:py-1.5 md:px-3"
            onClick={handleDownload}
          >
            Resume
            <img src={Download} className="h-5 w-5"></img>
          </button>
          <div className="flex-1 hidden md:block"></div>
          <div className="flex-1 hidden md:block"></div>

          <div className="flex-1 hidden md:block"></div>
          <button
            className="flex gap-1 items-center text-white bg-sky-700 py-1.5 px-3 rounded-[36px]"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/anshul-singh03",
                "_blank"
              )
            }
          >
            Connect
            <img src={Rocket} className="w-4 stroke-2 " />
          </button>
        </div>
      </nav>
      <div className="mt-2 md:mt-6">
        <MainContent />
        <WhatIDoSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
