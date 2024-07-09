import img1 from "./../../assets/html.png";
import img2 from "./../../assets/css.png";
import img3 from "./../../assets/javascript.png";
import img4 from "./../../assets/react.png";
import img5 from "./../../assets/tailwind.png";
function Skills() {
  return (
    <div className="container">
      <div className="flex flex-col gap-5 justify-between items-center border border-gray-600 px-6 py-3 rounded-lg md:flex-row">
        <div className="w-[100px] h-auto">
          <h1 className="text-5xl text-gray-600 text-center md:text-start">
            My Tech Stack
          </h1>
        </div>
        <div className="w-[100px] h-auto">
          <img src={img1} alt="html logo" />
        </div>
        <div className="w-[100px] h-auto">
          <img src={img2} alt="Css logo" />
        </div>
        <div className="w-[100px] h-auto">
          <img src={img3} alt="javaScript logo" />
        </div>
        <div className="w-[100px] h-auto">
          <img src={img4} alt="React logo" />
        </div>
        <div className="w-[100px] h-auto">
          <img src={img5} alt="tailwind logo" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
