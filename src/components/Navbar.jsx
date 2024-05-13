import { useState } from "react";
import { logo, close, menu, logo_sm } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full py-[25px] flex justify-between items-center">
      <img src={logo_sm} alt="logo" className="w-[182px] h-[70px]" />

      <ul className="list-none md:flex hidden justify-end items-center">
        {navLinks.map((navlink, index) => (
          <li
            key={navlink.id}
            className={`text-dark hover:text-blue hover:font-bold font-medium ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } ${index === 0 ? "active" : 0}`}
          >
            <a href={`#${navlink.id}`}>{navlink.title}</a>
          </li>
        ))}
      </ul>

      <div className="md:flex hidden">
        <ul className="list-none flex justify-between items-center">
          <li className="mr-4">
            <a href="#">Login</a>
          </li>
          <li className="bg-blue text-white rounded-[100px] px-[16px] py-[7px]">
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </div>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu_icon"
          className="w-[28px] h-[28px] text-dark object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-blue absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[999]`}
        >
          <ul className="list-none flex flex-col items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
