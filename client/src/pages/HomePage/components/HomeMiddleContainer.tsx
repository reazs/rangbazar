import React from "react";

import DapperSherwanis from "../../../assets/images/dapper sherwanis.jpg";
import Lehengas from "../../../assets/images/lehengas.jpg";
import KurtaPajamas from "../../../assets/images/kurta-pajamas.png";
import SalwarKameez from "../../../assets/images/salwar-kameez.jpg";
import PotterImg1 from "../../../assets/images/potter-1.jpg";
import PotterImg2 from "../../../assets/images/potter-2.jpg";
import PotterImg3 from "../../../assets/images/potter-3.jpg";
import PotterImg4 from "../../../assets/images/potter-4.png";

import { Reveal } from "../../../components/Reveal";
import { SlideTransition } from "../../../components/SlideTransition";
const HomeMiddleContainer: React.FC = () => {
  return (
    <>
      {/* second container */}
      <div className="max-w-screen-xl mx-auto lg:p-20  p-14  ">
        <Reveal>
          <h3 className="medium-heading text-primary-color">Our Collection</h3>
        </Reveal>

        <Reveal>
          <p className="body-text">
            showcases a vibrant array of desi traditional clothing, encompassing
            a variety of styles, colors, and fabrics. From stunning sarees,
            elegant salwar kameez sets, and graceful lehengas to dapper
            sherwanis and stylish kurta pajamas for men, we have something to
            suit every taste and occasion. Our meticulously curated selection
            ensures that you can embrace the timeless elegance and grace of
            traditional attire.
          </p>
        </Reveal>

        {/* about us image */}
        <div className=" max-w-screen-xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-2 mt-5">
          <SlideTransition delay={0.2}>
            <img
              src={SalwarKameez}
              className="object-cover md:w-[280px] h-[400px] rounded-md  about-img"
            />
          </SlideTransition>
          <SlideTransition delay={0.4}>
            <img
              src={DapperSherwanis}
              className="object-cover md:w-[280px] h-[400px] rounded-md  about-img"
            />
          </SlideTransition>
          <SlideTransition delay={0.6}>
            <img
              src={KurtaPajamas}
              className="object-cover md:w-[280px] h-[400px] rounded-md  about-img"
            />
          </SlideTransition>
          <SlideTransition delay={0.8}>
            <img
              src={Lehengas}
              className="object-cover md:w-[280px] h-[400px] rounded-md  about-img"
            />
          </SlideTransition>
        </div>

        {/* cultural heratiage */}
        <div className="mt-[50px]">
          <Reveal>
            <h3 className="medium-heading text-primary-color">
              Cultural Heritage
            </h3>
          </Reveal>
          <Reveal>
            <p className="body-text">
              We understand the importance of preserving and promoting
              traditional craftsmanship, which is why we collaborate with
              skilled artisans and designers who bring their expertise and
              passion to every creation. Each product you find at Rangbazaar
              tells a story, blending contemporary trends with age-old
              traditions, resulting in a harmonious fusion that captivates the
              senses.
            </p>
          </Reveal>
          <div className=" max-w-screen-xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-2 mt-5">
            <SlideTransition delay={0.2}>
              <img
                src={PotterImg1}
                className="object-cover md:w-[280px] h-[400px] rounded-md  about-img"
              />
            </SlideTransition>
            <SlideTransition delay={0.4}>
              <img
                src={PotterImg2}
                className="object-cover md:w-[280px] h-[400px] rounded-md  about-img"
              />
            </SlideTransition>
            <SlideTransition delay={0.6}>
              <img
                src={PotterImg3}
                className="object-cover md:w-[280px] h-[400px] rounded-md  about-img"
              />
            </SlideTransition>
            <SlideTransition delay={0.8}>
              <img
                src={PotterImg4}
                className="object-cover md:w-[280px] h-[400px] rounded-md  about-img"
              />
            </SlideTransition>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMiddleContainer;
