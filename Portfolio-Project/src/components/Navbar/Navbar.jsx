import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
const links = [
  {
    path: "#HomePage",
    name: "Home",
  },
  {
    path: "#About-Section",
    name: "About",
  },
  {
    path: "#Work-Section",
    name: "Work",
  },
  {
    path: "#Contact-Section",
    name: "Contact",
  },
];
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container" id="HomePage">
      <div className="flex justify-between items-center h-[100px] px-4 ">
        <div>
          <p className="text-3xl bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent font-bold">
            P.Awad
          </p>
        </div>

        <ul className="hidden gap-5 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                className="text-slate-100  hover:bg-gradient-to-t from-red-600 to-yellow-400 px-4 py-2 rounded-lg scroll-smooth"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <IoMenuSharp
          onClick={() => setOpen(!open)}
          className="md:hidden w-[30px] h-[30px] text-white cursor-pointer"
        />
        {open && (
          <div className=" md:hidden bg-gradient-to-r from-slate-800 to-black flex flex-col  gap-4  h-[calc(100vh-100px)] w-[50%] items-center justify-center absolute right-0 top-[100px] z-10">
            <ul className="flex flex-col justify-center items-center gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-slate-100  hover:bg-gradient-to-t from-red-600 to-yellow-400 px-4 py-2 rounded-lg   text-2xl"
                    onClick={() => setOpen(!open)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
