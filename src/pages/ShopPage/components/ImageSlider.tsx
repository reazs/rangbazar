import { useEffect, useState } from "react";
import { SlideTransition } from "../../../components/SlideTransition";
import { motion as m, useAnimation } from "framer-motion";
import { Reveal } from "../../../components/Reveal";
import Navbrand from "../../../components/navbrand";
interface Slide {
  url: string;
  title: string;
}

interface Props {
  slides: Slide[];
}

const ImageSlider = ({ slides }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#F2EEE5",
  };
  function handleLeftClick() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (currentIndex == 0) {
      setCurrentIndex(2);
    }
  }
  function handleRightClick() {
    console.log(currentIndex);

    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex == 2) {
      setCurrentIndex(0);
    }
    console.log(currentIndex);
  }
  function handleDotClick(index: number) {
    setCurrentIndex(index);
  }
  const controls = useAnimation();
  useEffect(() => {});
  return (
    <>
      <div className="h-full relative ">
        <m.div
          variants={{
            hide: { opacity: 0 },
            show: { opacity: 1 },
          }}
          initial="hide"
          animate={controls}
          className="absolute top-[50%]  transform:translate-(0, -50%) left-[32px]   z-10 cursor-pointer"
          onHoverStart={() => controls.start("show")}
          onHoverEnd={() => controls.start("hide")}
        >
          <i
            onClick={handleLeftClick}
            className="fa-solid fa-angle-left text-white  p-2 bg-primary-color hover:bg-[#33c9db]"
          ></i>
        </m.div>
        <m.div
          onHoverStart={() => controls.start("show")}
          onHoverEnd={() => controls.start("hide")}
          variants={{
            hide: { opacity: 0 },
            show: { opacity: 1 },
          }}
          initial="hide"
          animate={controls}
          className="absolute top-[50%] transform: translate-(0, -50%) right-[32px]  z-10 cursor-pointer "
        >
          <i
            onClick={handleRightClick}
            className="fa-solid fa-angle-right text-white p-2 bg-primary-color hover:bg-[#33c9db]"
          ></i>
        </m.div>
        <div className="absolute bottom-2 w-full flex justify-center">
          {slides.map((_, index) => {
            return (
              <>
                <div
                  onClick={() => {
                    handleDotClick(index);
                  }}
                  key={index}
                  className={
                    index == currentIndex
                      ? "h-[8px] w-[80px] inline-block bg-primary-color mr-2 cursor-pointer transition-all duration-500 rounded-full"
                      : "h-[8px] w-[40px] inline-block bg-primary-color mr-2 cursor-pointer transition-all duration-500 rounded-full"
                  }
                ></div>
              </>
            );
          })}
        </div>

        <m.div
          onHoverStart={() => controls.start("show")}
          onHoverEnd={() => controls.start("hide")}
          initial={{
            opacity: 0,
            top: "100%",
          }}
          animate={{
            opacity: 1,
            top: 0,
          }}
          transition={{ duration: 0.7 }}
          className="h-full w-full rounded-md transition-all delay-75"
          //   style={slideStyles}
        >
          {/* inside the slider */}
          <div
            style={slideStyles}
            className="h-full  flex flex-row justify-between items-center "
          >
            <div className="h-full w-full  flex justify-center items-center">
              <div className="flex flex-col h-full">
                <div className="m-auto text-white  p-4 bg-primary-color bg-opacity-20 rounded-sm max-w-[450px]">
                  <p className="text-sm">MORE LUXURY & TRENDING</p>
                  <p className="text-sm">
                    Unveils a stunning collection of fashionable and timeless
                    clothing at your fingertips.
                  </p>
                  <div className="mt-2 py-2 px-6 bg-red-300 hover:bg-red-400 cursor-pointer inline-block">
                    Shop Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </>
  );
};

export default ImageSlider;
