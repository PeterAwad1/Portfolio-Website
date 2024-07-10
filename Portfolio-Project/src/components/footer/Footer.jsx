import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="container mt-32 border-t-2 border-gray-600/70">
      <div className="flex justify-between items-center p-4 ">
        <p className="text-3xl bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent font-bold">
          P.Awad
        </p>
        <div className="flex justify-between gap-5">
          <a href="https://www.linkedin.com/in/peterawad2" target="_blank">
            <FaLinkedin className="w-6 h-6 text-blue-500 cursor-pointer" />
          </a>
          <a href="https://github.com/PeterAwad1" target="_blank">
            <FaGithub className="w-6 h-6 bg-white rounded-full cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
