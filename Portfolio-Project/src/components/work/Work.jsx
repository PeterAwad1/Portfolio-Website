import Img1 from "./../../../public/Img1.png";
import Img2 from "./../../../public/Img2.png";
import Img3 from "./../../../public/Img3.png";
import Img4 from "./../../../public/img4.png";

const projects = [
  {
    img: Img1,
    path: "https://github.com/PeterAwad1/E-Shop",
    name: "E-Shop",
    delay: "0",
  },
  {
    img: Img2,
    path: "https://github.com/PeterAwad1/Creative_Agency",
    name: "Crearive-Agency",
    delay: "500",
  },
  {
    img: Img3,
    path: "https://github.com/PeterAwad1/Travel-list-site",
    name: "Travel-List",
    delay: "1000",
  },
  {
    img: Img4,
    path: "https://github.com/PeterAwad1/Css-Omnifood-project",
    name: "Omni-Food",
    delay: "1500",
  },
];
function Work() {
  return (
    <div className="container mt-32" id="Work-Section">
      <div>
        <h1 className="mb-10 bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent text-4xl font-extrabold">
          Work
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[40px] gap-x-[100px]">
          {projects.map((project) => (
            <div
              className="group"
              key={project.name}
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="500"
              data-aos-daley={project.delay}
            >
              <div className="leading-7">
                <h2 className="font-semibold text-white text-xl mb-4 md:text-start text-center">
                  {project.name}
                </h2>
              </div>
              <div className="relative">
                <img
                  src={project.img}
                  alt={project.name}
                  className="h-[250px] md:h-[300px] lg:h-[350px] w-full object-cover rounded-md drop-shadow-[0px_0px_3px_rgba(200,200,200,0.375)]"
                />

                <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                  <a
                    href={project.path}
                    className=" text-black bg-slate-200 px-4 py-2 rounded-md font-semibold cursor-pointer"
                    target="_blank"
                  >
                    Project Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
