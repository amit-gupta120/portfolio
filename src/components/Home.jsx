import React from "react";
// import ProfileImage from "../assets/hero.jpeg";
import developer from "../assets/developer1.png"
import { MdKeyboardArrowRight } from "react-icons/md";
import Typewriter from "typewriter-effect";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-[50px]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-row items-center justify-between  h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full" style={{flex:1}}>
          <h6 className="text-2xl sm:text-7xl font-bold text-cyan-500">
            I'm a
            <p className="text-cyan-500">
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
          <p className="text-gray-500 py-4 max-w-md text-xl">
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
                <a href="/AmitD_Updated_CV.pdf" download={true}>Download Resume</a>
              <span className="">
                <BsFillPersonLinesFill size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>        
        <div>
          <img           
            // src={ProfileImage}
            src={developer}
            alt="My Profile Image"
            className="rounded-2xl mx-auto md:w-full"
            style={{height:"400px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
