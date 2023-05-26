import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slides from "../models/Slides.tsx";
import { motion as m, useAnimation } from "framer-motion";
const SlideShow: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    dots: true,
    beforeChange: (_: any, newIndex: number) => handleSlideChange(newIndex),
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  function handleSlideChange(newIndex: number) {
    setCurrentIndex(newIndex);
  }
  const controller = useAnimation();
  const varrients = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };
  function handleOnEnter() {
    controller.start("show");
  }
  function handleOnExit() {
    controller.start("hide");
  }
  function handlePreviousSlide() {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log(currentIndex);
  }

  function handleNextSlide() {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log(currentIndex);
  }
  return (
    <>
      <div>
        <div>
          <Slider {...settings}>
            {slides.map((_, index) => {
              return (
                <>
                  <m.div
                    key={index}
                    onHoverStart={handleOnEnter}
                    onHoverEnd={handleOnExit}
                    style={{
                      backgroundImage: `url(${slides[currentIndex].url})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#F2EEE5",
                      position: "relative",
                    }}
                    className="lg:h-[55vh] h-[45vh]   flex flex-row justify-center "
                  >
                    {/* left arrow of carousel */}
                    <m.div
                      variants={varrients}
                      initial="hide"
                      animate={controller}
                      className="absolute top-[50%] lg:left-8 left-4  z-10"
                    >
                      <i
                        onClick={handlePreviousSlide}
                        className="fa-solid fa-angle-left text-white  p-2 bg-primary-color hover:bg-[#33c9db] cursor-pointer"
                      ></i>
                    </m.div>
                    {/* right arrow of carousel */}
                    <m.div
                      variants={varrients}
                      initial="hide"
                      animate={controller}
                      className="absolute top-[50%] lg:right-8 right-4  z-10"
                    >
                      <i
                        onClick={handleNextSlide}
                        className="fa-solid fa-angle-right text-white  p-2 bg-primary-color hover:bg-[#33c9db] cursor-pointer"
                      ></i>
                    </m.div>

                    <div className="h-full w-full  flex justify-center items-center">
                      <div className="flex flex-col h-full">
                        <div className="m-auto text-white  p-4 bg-primary-color bg-opacity-20 rounded-sm max-w-[450px]">
                          <p className="text-sm">MORE LUXURY & TRENDING</p>
                          <p className="text-sm">
                            Unveils a stunning collection of fashionable and
                            timeless clothing at your fingertips.
                          </p>
                          <div className="mt-2 py-2 px-6 bg-red-300 hover:bg-red-400 cursor-pointer inline-block">
                            Shop Now
                          </div>
                        </div>
                      </div>
                    </div>
                  </m.div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SlideShow;
