import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <div className="flex justify-between items-center h-[100px] px-4">
        <div>
          <p className="text-3xl bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent font-bold">
            P.Awad
          </p>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#Home" className="text-slate-100 ">
            Home
          </a>
          <a href="#about" className="text-slate-100 ">
            About
          </a>
          <a href="#work" className="text-slate-100 ">
            Work
          </a>
          <a href="#contact" className="text-slate-100 ">
            Contact
          </a>
        </div>
        <IoMenuSharp
          onClick={() => setOpen(!open)}
          className="md:hidden w-[30px] h-[30px] text-white cursor-pointer"
        />
        {open && (
          <div className="md:hidden bg-gradient-to-r from-slate-800 to-black flex flex-col  gap-4  h-[calc(100vh-100px)] w-[50%] items-center justify-center absolute right-0 top-[100px] ">
            <a href="#Home" className="text-slate-100 ">
              Home
            </a>
            <a href="#about" className="text-slate-100 ">
              About
            </a>
            <a href="#work" className="text-slate-100 ">
              Work
            </a>
            <a href="#contact" className="text-slate-100 ">
              Contact
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
