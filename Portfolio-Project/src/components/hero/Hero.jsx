import { TypeAnimation } from "react-type-animation";
import Img1 from "./../../../public/After X2 Enh (1) After Resize.png";
function Hero() {
  return (
    <div className="container" id="Hero-Section">
      <div className="grid grid-cols-1 md:grid-cols-3 md:h-[400px] gap-y-24 md:gap-24 my-10 items-center justify-center">
        <div className="col-span-1 m-auto h-auto  w-[350px] sm:w-[200px] lg:w-[250px] xl:w-[300px]">
          <img
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="1000"
            src={Img1}
            alt="Hero Image"
            className="drop-shadow-[0px_0px_10px_rgba(255,255,255,0.275)] "
          />
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
          <p className="inline-block text-white my-6 lg:text-lg text-center md:text-start z-40 ">
            My name is Peter Awad and i have 6+ months experience in web
            development
          </p>
          <div className="my-6 flex items-center gap-4 justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1lzDr-rzH9oZLBOxF_LP7lA3qPReYG7Es/view"
              target="_blank"
              className="text-center text-xl px-6 py-3 bg-gradient-to-r w-[200px] from-red-600 to-yellow-500 text-white font-bold rounded-xl z-40"
            >
              Download CV
            </a>
            <a
              href="#Contact-Section"
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
