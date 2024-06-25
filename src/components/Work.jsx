import React from "react";
import { Projects } from "../Data/projects";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-orange-500">
            Work
          </p>
          <p className="py-4">Check out some of my recent works :</p>
        </div>

        {/* container for projects */}
        <div className="p-4 grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* grid items */}
          {Projects.map(({id,name, image, githubLink, liveLink}) => (
            <div
              key={id}
              style={{ backgroundImage: `url(${image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-lg 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 hover:opacity-100 hover:bg-[#000000be] h-full w-full flex flex-col justify-center items-center rounded-lg">
                <span className="text-2xl font bold text-gray-300 tracking-wider ">
                  {name}
                </span>
                <div className="pt-2 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={githubLink} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-2 m-2
                       bg-[#8892b0] text-black font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={liveLink} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-2 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
