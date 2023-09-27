import React from "react";


const About = () => {
  //
  return (
    <div
      name="about"
      className="w-full  h-screen bg-gradient-to-b from-gray-800 to-black  text-white"
    >
      <div
        className="max-w-screen-lg p-4 pt-[25px] mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="pt-[7px]">
          <div className="pb-[10px]">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>

          <div className="pt-[5px]">
            <p className="text-xl">
              Experienced Front End Developer with a proven track record of one
              year in designing and developing visually appealing, user-friendly
              web applications. Proficient in HTML, CSS, JavaScript, and modern
              front-end frameworks. Strong problem-solving skills, a keen eye
              for design, and a commitment to delivering high-quality user
              experiences. Eager to contribute my expertise to dynamic teams and
              take on new challenges in the world of web development.
            </p>
            <p className="text-xl">
              With a strong foundation in problem-solving and a meticulous
              attention to detail, I thrive on tackling complex challenges and
              transforming them into elegant, efficient solutions. My passion
              for design excellence is evident in every project, as I
              continuously strive to deliver high-quality user experiences that
              not only meet but exceed expectations.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
