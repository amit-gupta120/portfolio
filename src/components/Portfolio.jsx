import React from "react";
import ShoppingImage from "../assets/reactShoppingApp.png";
import todoImage from "../assets/reactTODO.jpg";
import WeatherApp from "../assets/reactWeather.jpeg";
import { Link } from "react-scroll";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
// import { Pagination } from 'swiper/modules';

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ShoppingImage,
    },
    {
      id: 2,
      src: todoImage,
    },
    {
      id: 3,
      src: WeatherApp,
    },
    {
      id: 4,
      src: ShoppingImage,
    },
    {
      id: 5,
      src: todoImage,
    },
    {
      id: 6,
      src: todoImage,
    },
  ];
  return (
    <div 
      name="portfolio"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      {/* <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"> */}
      {/* <div className="p-4 mx-auto flex flex-col justify-center w-full h-full"> */}
      <div className="customSliderContainerByAmit">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
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
          style={{ backgroundColor: "#18202b",height:"600" }}
        >
          {portfolios.map(({ id, src }) => {
            return (
              <SwiperSlide key={src} style={{ width: 100, height: 250,backgroundColor:"#4b5563" }}>
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
                      }}
                    />
                    <div className="flex items-center justify-center">
                      <button className="w-1/2 m-4 duration-200  hover:scale-105">
                        Demo
                      </button>
                      <button
                        className="w-1/2 m-4 duration-200  hover:scale-105"
                        onClick={() =>
                          window.open(
                            "https://github.com/your-username/your-repo",
                            "_blank"
                          )
                        }
                        style={{
                          border: "none",
                          background: "none",
                          cursor: "pointer",
                        }}
                      >
                        Code
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* </div> */}
        </div>
      </div>
  );
};
export default Portfolio;
