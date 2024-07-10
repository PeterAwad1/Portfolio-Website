import ImgAbout from "./../../assets/about.jpg";
function About() {
  return (
    <div className="container mt-32" id="About-Section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px]">
        <div className="text-center md:text-start">
          <h1 className="bg-gradient-to-r from-red-600 to-yellow-200 bg-clip-text text-transparent text-4xl font-extrabold">
            About me
          </h1>
          <p className="text-white mt-5">
            I&apos;m a motivated junior front-end developer with expertise in
            React, Next.js, and JavaScript. I&apos;ve built responsive,
            user-friendly web applications, including the &quot;Creative
            Agency&quot; full-stack app. My training and projects demonstrate my
            ability to integrate server actions and manage dynamic databases
            with MongoDB. As a former Reserve Officer, I bring strong leadership
            and teamwork skills. I&apos;m passionate about creating cutting-edge
            web solutions and eager to contribute to innovative projects.
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <img
            data-aos="fade"
            data-aos-offset="0"
            data-aos-duration="500"
            src={ImgAbout}
            alt="About Image"
            className="w-[300px] h-[300px] rounded-lg drop-shadow-[0px_0px_50px_rgba(200,10,10,0.875)]"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
