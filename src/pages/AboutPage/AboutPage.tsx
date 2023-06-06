import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurVisionSVG from "../../assets/our-vision.svg";

import Footer from "../../components/Footer";
import TreeScrollAnimation from "../../components/TreeScrollAnimation";
import ColorLoading from "../../components/ColorLoading";
import Utils from "../../utils/ScreenTimeUtils";

const AboutPage: React.FC = () => {
  const [isLoadingShow, setIsLoadingShow] = useState(true);

  useEffect(() => {
    Utils.delay(800).then(() => {
      setIsLoadingShow(false);
    });
  });
  return isLoadingShow ? (
    <>
      <ColorLoading />
    </>
  ) : (
    <>
      <div className=" w-full ">
        <div className=" max-w-screen-md mx-auto ">
          {/* introduction */}
          <div className="md:mx-0 mx-5 ">
            <h3 className="medium-heading mt-20">About Us</h3>
            <p className=" font-['Poppins'] md:text-xl text-[16px] ">
              Rangbazar is a dynamic startup company dedicated to
              revolutionizing the way businesses operate and thrive in the
              modern digital era. With a passion for innovation and a mission to
              empower businesses of all sizes, Rangbazar has quickly emerged as
              a leading player in the market. Our commitment to excellence,
              customer-centric approach, and cutting-edge technology solutions
              have propelled us to become a trusted partner for businesses
              looking to grow and succeed.
            </p>
          </div>
          {/* vision container */}
          <div className="md:mx-0 mx-5 mt-[50px] ">
            <img className="h-[400px]" src={OurVisionSVG} />
            <h3 className="medium-heading font-['Poppins'] text-red-400 mt-[100px]">
              Our Vision
            </h3>
            <p className=" md:text-xl text-[16px] ">
              At Rangbazar, our vision is to transform the business landscape by
              providing comprehensive, user-friendly, and scalable solutions
              that empower businesses to reach their full potential. We believe
              in bridging the gap between technology and businesses, ensuring
              that every organization can leverage the power of digital
              platforms to achieve remarkable growth and success.
            </p>
          </div>
        </div>
        <Footer />
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        >
          <TreeScrollAnimation />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
