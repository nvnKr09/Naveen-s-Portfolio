import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-8 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-semibold ">
            <p>
              Hi. I'm <span className="text-[#8892b0] font-bold">Naveen</span>,
              nice to meet you. Please take a look around.
            </p>{" "}
          </div>
          <div>
            <p>
            I'm a <span className="text-sky-400">MERN stack developer</span> with a keen interest in exploring the future of <span className="text-pink-600">AI</span> and <span className="text-pink-600">Machine Learning</span>. I'm passionate about crafting beautiful and responsive web applications that provide a seamless user experience.
            <br />
            <span className="text-[#8892b0]">
              When I'm not coding, I love to unwind with music, explore new destinations through travel, and capture those experiences through photography.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
