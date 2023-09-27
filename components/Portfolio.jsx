import React from "react";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800 py-[7rem] px-4"
    >
      <div className="pb-8">
        <p className="text-4xl ml-[155px] text-white font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
      </div>

      <div className="max-w-[1024px] mx-auto grid md:grid-cols-3 gap-8">
        <div className=" bg-gray-300 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8 underline">
            Cryptocurrency App
          </h2>
          <p className="text-center font-bold">Technology Used:</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              ReactJs, Redux and Ant Design
            </p>
            <p className="py-2 border-b mx-8">
              A app where you can see the Global Stats of the crypto currency
              and can read news related to any currency and view the list of all
              currency.
            </p>
          </div>
          <div className="flex">
            <button className="bg-[#00df9a] w-[120px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              <a
                href="https://cryptocurrency-application.vercel.app/"
                target="_blank"
              >
                Live
              </a>
            </button>
            <button className="bg-[#00df9a] w-[120px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              <a
                href="https://github.com/amit-gupta120/Cryptocurrency-Application"
                target="_blank"
              >
                Git Repo
              </a>
            </button>
          </div>
        </div>

        <div className="w-full shadow-xl bg-gray-300 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8 underline">
            Personal Portfolio
          </h2>
          <p className="text-center font-bold">Technology Used:</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">ReactJs and Tailwind CSS</p>
            <p className="py-2 border-b mx-8">
              In my portfolio, you'll find a collection of my work that reflects
              my passion and dedication in creating meaningful and impactful
              experiences.
            </p>
          </div>
          <div className="flex ">
            <button className="bg-[#00df9a] w-[120px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            <a
                href="https://cryptocurrency-application.vercel.app/"
                target="_blank"
              >
                Live
              </a>
            </button>
            <button className="bg-[#00df9a] w-[120px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            <a
                href="https://github.com/amit-gupta120/portfolio"
                target="_blank"
              >
                Git Repo
              </a>
            </button>
          </div>
        </div>

        <div className="w-full shadow-xl bg-gray-300 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold text-center py-8 underline">Weather App</h2>
          <p className="text-center font-bold">Technology Used:</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">HTML,CSS & JavaScript</p>
            <p className="py-2 border-b mx-8">
              In my portfolio, you'll find a collection of my work that reflects
              my passion and dedication in creating meaningful and impactful
              experiences.
            </p>
          </div>
          <div className="flex ">
          <button className="bg-[#00df9a] w-[120px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              <a
                // href="https://cryptocurrency-application.vercel.app/"
                target="_blank"
              >
                Live
              </a>
            </button>
            <button className="bg-[#00df9a] w-[120px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              <a
                href="https://github.com/amit-gupta120/Weather-App"
                target="_blank"
              >
                Git Repo
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
