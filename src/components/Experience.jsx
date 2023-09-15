import React from "react";
import html from "../assets/html5.png";
import css from "../assets/cssImage.png";
import js from "../assets/jsImage.png";
import reactImg from "../assets/reactImage.png";
import taiwlindImg from "../assets/tailwindImage.png";
import git from "../assets/gitImage.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500 h-50 w-50",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImg,
      title: "ReactJs",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: taiwlindImg,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: git,
      title: "GitHub",
      style: "shadow-gray-500",
    },
  ];

  return (
    <div
      name="experience"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      {/* <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"> */}
      {/* <div className="p-4 mx-auto flex flex-col justify-center w-full h-full"> */}
      <div className="customSliderContainerByAmit">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>
        {/* <div className="customSliderBoxByAmit"> */}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={60}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ backgroundColor: "#18202b", height: "600" }}
        >
          {techs.map(({ id, src, title, style }) => (
            <SwiperSlide
              key={src}
              style={{ width: 100, height: 250, backgroundColor: "#4b5563" }}
            >
              <SwiperSlide key={src}>
                <div
                  key={id}
                  className="shadow-md shadow-gray-600 rounded-lg"
                  style={{}}
                >
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-120"
                    style={{
                      height: "185px",
                      width: "100%",
                      resizeMode: "contain",
                    }} />
                  {/* <div className="flex items-center justify-center">
                    <button className="w-1/2 m-4 duration-200  hover:scale-105">
                      Demo
                    </button>
                    <button
                      className="w-1/2 m-4 duration-200  hover:scale-105"
                      onClick={() => window.open(
                        "https://github.com/your-username/your-repo",
                        "_blank"
                      )}
                      style={{
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                      }}
                    >
                      Code
                    </button>
                  </div> */}
                </div>
              </SwiperSlide>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </div>
  );
  // return (
  //   <div
  //     name="experience"
  //     className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen"
  //   >
  //     <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
  //       <div className="mt-100">
  //         <p
  //           className="text-4xl font-bold border-b-4
  //           border-gray-500 p-2 inline"
  //         >
  //           Experience
  //         </p>
  //         <p className="py-6">These are the technologies,I've worked with.</p>
  //       </div>

  //       <Swiper
  //         // install Swiper modules
  //         modules={[Navigation, Pagination, Scrollbar, A11y]}
  //         spaceBetween={50}
  //         slidesPerView={3}
  //         navigation
  //         pagination={{ clickable: true }}
  //         scrollbar={{ draggable: true }}
  //         onSwiper={(swiper) => console.log(swiper)}
  //         onSlideChange={() => console.log("slide change")}
  //         style={{ backgroundColor: "#000", height: "400" }}
  //       >
  //         {techs.map(({ id, src, title, style }) => {
  //           return (
  //             <SwiperSlide
  //               key={src}
  //               style={{ width: 100, height: 250, backgroundColor: "#4b5563" }}
  //             >
  //               <SwiperSlide key={src}>
  //                 <div>{title}</div>
  //                 {/* <div
  //                   key={id}
  //                   className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg" ${style}`}
  //                 >
  //                   <img src={src} alt="" className="w-40 mx-auto" />
  //                   <p className="mt-4">{title}</p>
  //                 </div> */}
  //               </SwiperSlide>
  //             </SwiperSlide>
  //           );
  //         })}
  //       </Swiper>

  //       {/* <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"></div> */}
  //     </div>
  //   </div>
  // );
};

export default Experience;
