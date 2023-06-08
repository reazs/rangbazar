import React from "react";

import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import CoverImage from "../../../assets/shopping.svg";
import UtilAnimatedRiveBtn from "../../../utils/UtilAnimatedRiveBtn";

const HomeCoverContainer: React.FC = () => {
  return (
    <>
      <div className="w-full grid lg:grid-cols-2 grid-cols-1  lg:pt-[250px] pb-[130px]">
        {/* left container */}

        <div>
          <div className="">
            <m.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className=" lg:max-w-[750px] bg-white p-10 bg-opacity-90 mx-5 lg:rounded-md lg:shadow-lg"
            >
              <m.div
                initial={{ opacity: 0, y: "10%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
              >
                <h3 className="big-heading md:text-start text-center font-bold font-['Merriweather'] text-primary-color">
                  Welcome To <p className="font-['Offside']">rangbazaar</p>
                </h3>

                <p className="md:text-xl md:text-start text-center text-[16px] font-['Poppins'] ">
                  {/* Your ultimate destination for exquisite desi clothing and
                                  traditional materials. */}
                  Immerse yourself in our vibrant collection, curated with love,
                  where you can explore and shop for the finest selection of
                  ethnic attire, embracing the beauty of our cultural heritage.
                </p>
              </m.div>
              <div className=" overflow-hidden">
                <Link to={"/shop"}>
                  <m.div
                    initial={{ x: "-100%", opacity: 0.3 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.45, delay: 0.3, ease: "easeIn" }}
                    style={{ position: "relative", top: "-10" }}
                    className="py-4  mx-auto md:mx-0    h-[160px] w-[210px] "
                  >
                    <UtilAnimatedRiveBtn
                      src="rive-cat-button.riv"
                      stateMachineName="State Machine 1"
                      autoplay={true}
                    />
                  </m.div>
                </Link>
              </div>
            </m.div>
          </div>
          ;
        </div>
        {/* right container */}
        <div className="object-cover">
          <img src={CoverImage} />
        </div>
      </div>
    </>
  );
};

export default HomeCoverContainer;
