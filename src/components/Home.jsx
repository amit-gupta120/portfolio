import React from "react";
import ProfileImage from "../assets/hero.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-row items-center justify-between  h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full" style={{flex:1}}>
          <h6 className="text-3xl sm:text-7xl font-bold text-white">
            I'm a
            <p className="text-red-500">
              <Typewriter
                options={{
                  strings: [
                    "Front End Developer",
                    "UI/UX Developer",
                    "Freelancer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </h6>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1 year of experience building and desgining software.
            Currently,I love to work on web applications using technologies like
            React and Tailwind.
          </p>
          <div>
            <button
              className="group text-white w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500
             cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>        
        <div>
          <img           
            src={ProfileImage}
            alt="My Profile Image"
            className="rounded-2xl mx-auto md:w-full"
            style={{height:"450px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
