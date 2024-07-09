import { TypeAnimation } from "react-type-animation";
import Img1 from "./../../../public/After X2 Enh (1) After Resize.png";
function Hero() {
  return (
    <div className="container" id="Hero-Section">
      <div className="grid grid-cols-1 md:grid-cols-3 md:h-[70vh] gap-10 my-10 items-center justify-center">
        <div className="col-span-1 m-auto h-auto lg:w-[400px] w-[300px]">
          <img src={Img1} alt="Hero Image" />
        </div>
        <div className="col-span-2">
          <h1 className="sm:text-5xl lg:text-8xl font-extrabold text-white text-4xl text-center md:text-start">
            <span className="bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">
              I&apos;m a
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={["Front-End Dev", 1000, "Web-Designer", 1000]}
              wrapper="span"
              repeat={Infinity}
              speed={50}
            />
          </h1>
          <p className="text-white my-6 lg:text-lg text-center md:text-start">
            My name is Peter Awad and i have 6+ months experience in web
            development
          </p>
          <div className="my-6 flex items-center gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="text-center text-xl px-6 py-3 bg-gradient-to-r w-[200px] from-red-600 to-yellow-500 text-white font-bold rounded-xl"
            >
              Download CV
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-gray-400 hover:border-none text-white font-bold rounded-xl text-xl"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
