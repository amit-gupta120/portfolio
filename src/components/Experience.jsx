import React from "react";

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full  h-screen bg-gradient-to-b from-gray-800 to-black  text-white"
    >
      <div
        className="max-w-screen-lg p-4 pt-[25px] mx-auto flex flex-col
             justify-center w-full h-full"
      >
        <div className="pt-[7px]">
          <div className="mt-3 mb-[-25px]">
            <p className="font-bold text-3xl mt-4 mb-[20px] inline border-b-4 border-gray-500">
              Skills:
            </p>
          </div>

          <div>
            <ul className="flex items-center justify-center mt-4 gap-[50px] flex-wrap ">
              <li className="p-4">
                <div className="flex flex-col h-[150px] w-[100px] text-white font-bold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  items-center justify-around  px-5 py-2 hover:scale-115 duration-300">
                  <AiFillHtml5 size={35} className="mr-2" />
                  HTML
                </div>
              </li>
              <li className="p-4">
                <div className="flex flex-col h-[150px] w-[100px] text-white font-bold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  items-center justify-around  px-5 py-2 hover:scale-115 duration-300">
                  <DiCss3 size={35} className="mr-2" />
                  CSS
                </div>
              </li>
              <li className="p-4">
                <div className="flex flex-col h-[150px] w-[100px] text-white font-bold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer items-center justify-around px-5 py-2 hover:scale-115 duration-300">
                  <BiLogoJavascript size={35} className="mr-1" />
                  JavaScript
                </div>
              </li>
              <li className="p-4">
                <div className="flex flex-col h-[150px] w-[100px] text-white font-bold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer items-center justify-around  px-5 py-2 hover:scale-115 duration-300">
                  <BiLogoReact size={35} className="mr-1" />
                  ReactJs
                </div>
              </li>
              <li className="p-4">
                <div className="flex flex-col h-[150px] w-[100px] text-white font-bold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  items-center justify-around  px-5 py-2 hover:scale-115 duration-300">
                  <TbBrandRedux size={35} className="mr-1" />
                  Redux
                </div>
              </li>
              <li className="p-4">
                <div className="flex flex-col h-[150px] w-[100px] text-white font-bold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer items-center justify-around  px-5 py-2 hover:scale-115 duration-300">
                  <BiLogoTailwindCss size={35} className="mr-1" />
                  Tailwind
                </div>
              </li>
              <li className="p-4">
                <div className="flex flex-col h-[150px] w-[100px] text-white font-bold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  items-center justify-around  px-5 py-2 hover:scale-115 duration-300">
                  <AiFillGithub size={35} className="mr-1" /> Git
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
