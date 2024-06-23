import React from "react";

// assets imports
import html from "../assets/html.png";
import css from "../assets/css.png";
import javaScript from "../assets/javascript.png";
import github from "../assets/github.png";
import react from "../assets/react.png";
import firebase from "../assets/firebase.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import sass from "../assets/sass.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="px-4">
          <p className="text-4xl font-bold inline border-b-4 border-orange-500">
            Experience
          </p>
          <p className="py-4">These are the technologies I've worked with :</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8 ">
          {/* icons */}
          <div className="hover:scale-110 duration-500 flex flex-col gap-4 p-2">
            <img className="w-20 mx-auto" src={html} alt="Html icon" />
            <p>HTML</p>
          </div>
          <div className="hover:scale-110 duration-500 flex flex-col gap-4 p-2">
            <img className="w-20 mx-auto" src={css} alt="CSS icon" />
            <p>CSS</p>
          </div>
          <div className="hover:scale-110 duration-500 flex flex-col gap-4 p-2">
            <img
              className="w-20 mx-auto"
              src={javaScript}
              alt="javaScript icon"
            />
            <p>JavaScript</p>
          </div>
          <div className="hover:scale-110 duration-500 flex flex-col gap-4 p-2">
            <img className="w-20 mx-auto" src={react} alt="React icon" />
            <p>React</p>
          </div>
          <div className="hover:scale-110 duration-500 flex flex-col gap-4 p-2">
            <img className="w-20 mx-auto" src={github} alt="Github icon" />
            <p>Github</p>
          </div>
          <div className="hover:scale-110 duration-500 flex flex-col gap-4 p-2">
            <img className="w-20 mx-auto" src={firebase} alt="Firebase icon" />
            <p>Firebase</p>
          </div>
          <div className="hover:scale-110 duration-500 flex flex-col gap-4 p-2">
            <img className="w-20 mx-auto" src={node} alt="Node icon" />
            <p>Node</p>
          </div>
          <div className="hover:scale-110 duration-500 flex flex-col gap-4 p-2">
            <img className="w-20 mx-auto" src={mongo} alt="MongoDb icon" />
            <p>MongoDb</p>
          </div>
          <div className="hover:scale-110 duration-500 flex flex-col gap-4 p-2">
            <img className="w-20 mx-auto" src={sass} alt="Sass icon" />
            <p>Sass</p>
          </div>
          <div className="hover:scale-110 duration-500 flex flex-col gap-4 p-2">
            <img className="w-20 mx-auto" src={tailwind} alt="Tailwind icon" />
            <p>Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
