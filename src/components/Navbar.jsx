import React, { useState } from "react";

// icons import
import { BsPersonLinesFill } from "react-icons/bs";
import { FaBars, FaLinkedin, FaTimes } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { Link } from "react-scroll";

// assets
import resume from '../assets/Naveen_Resume.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="px-4 fixed w-full h-[80px] flex justify-between items-center bg-[#0a192f] text-gray-300 z-10">
      <div id="logo">
        <h1 className="text-xl font-semibold">PORTFOLIO</h1>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        {["Home", "About", "Skills", "Work", "Contact"].map((skill, idx) => (
          <li key={idx} className="px-3 hover:text-[#8892b0]">
            <Link
              to={skill.toLowerCase()}
              smooth={true}
              duration={500}
            >
              {skill}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-[100] cursor-pointer" onClick={handleClick}>
        {!nav ? <FaBars size={26} /> : <FaTimes size={26} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {["Home", "About", "Skills", "Work", "Contact"].map((skill, idx) => (
          <li key={idx} className="py-6 text-4xl hover:text-[#8892b0]">
            <Link  onClick={handleClick}
              to={skill.toLowerCase()}
              smooth={true}
              duration={500}
            >
              {skill}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-108px] hover:ml-[0px] duration-300 bg-[#0A66C2] px-3">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/naveen-kr09/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-108px] hover:ml-[0px] duration-300 bg-[#333333] px-3">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/nvnKr09"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-108px] hover:ml-[0px] duration-300 bg-[#6fc2b0] px-3">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href='mailto:nvnkr09@gmail.com'
              target="_blank"
            >
              Mail <HiMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-108px] hover:ml-[0px] duration-300 bg-[#565f69] px-3">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={resume}
              download
            >
              Resume <BsPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
