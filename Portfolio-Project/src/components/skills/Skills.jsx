import img1 from "./../../assets/html.png";
import img2 from "./../../assets/css.png";
import img3 from "./../../assets/javascript.png";
import img4 from "./../../assets/react.png";
import img5 from "./../../assets/tailwind.png";
function Skills() {
  return (
    <div className="container mt-32">
      <h1 className="mb-10 bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent text-4xl font-extrabold text-center">
        Skills
      </h1>
      <div
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="1000"
        className="grid grid-cols-3 md:grid-cols-6 gap-5 justify-between items-center  px-6 py-3 rounded-lg "
      >
        <div className="w-[50px] h-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-600 text-center md:text-start">
            My Tech Stack
          </h1>
        </div>
        <div className="w-[75px] md:w-[85px] lg:w-[100px] h-auto">
          <img src={img1} alt="html logo" />
        </div>
        <div className="w-[75px] md:w-[85px] lg:w-[100px] h-auto">
          <img src={img2} alt="Css logo" />
        </div>
        <div className="w-[75px] md:w-[85px] lg:w-[100px] h-auto">
          <img src={img3} alt="javaScript logo" />
        </div>
        <div className="w-[75px] md:w-[85px] lg:w-[100px] h-auto">
          <img src={img4} alt="React logo" />
        </div>
        <div className="w-[75px] md:w-[85px] lg:w-[100px] h-auto">
          <img src={img5} alt="tailwind logo" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
