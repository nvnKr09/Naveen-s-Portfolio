import React from "react";

import { HiArrowRight } from "react-icons/hi";
import HandWave from "./Effects/HandWave";
import Type from "./Type";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name='home' className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center h-full gap-2">
        <p className="text-[#dce2f6] text-lg sm:text-3xl">
          Hi, there <HandWave />
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#dce2f6]">
          I'm <span className="text-orange-500">Naveen Kumar</span>
        </h1>
        <div className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          <Type className="" />
        </div>
        <p className="text-[#dce2f6] py-4 max-w-[700px]">
          I'm a MERN stack developer passionate about crafting beautiful and responsive web applications.
          experience.
        </p>
        <div>
        <Link
              to='work'
              smooth={true}
              duration={500}
            >
              <button className="text-white border-2 px-6 py-2 flex items-center hover:bg-orange-500 hover:border-orange-500 gap-4">
            View Work
            <HiArrowRight />
          </button>
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
