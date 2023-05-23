import React, { useEffect } from "react";
import CoverImage from "../../assets/rangbazar-cover-img.jpg";
import OnlineShoppingImg from "../../assets/online-shopping.jpg";
import DapperSherwanis from "../../assets/images/dapper sherwanis.jpg";
import Lehengas from "../../assets/images/lehengas.jpg";
import KurtaPajamas from "../../assets/images/kurta-pajamas.png";
import SalwarKameez from "../../assets/images/salwar-kameez.jpg";
import PotterImg1 from "../../assets/images/potter-1.jpg";
import PotterImg2 from "../../assets/images/potter-2.jpg";
import PotterImg3 from "../../assets/images/potter-3.jpg";
import PotterImg4 from "../../assets/images/potter-4.png";

import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { Reveal } from "../../components/Reveal";
import { SlideTransition } from "../../components/SlideTransition";
import "./HomePage.css";
const HomePage: React.FC = () => {
  const coverImageStyle = {
    backgroundImage: `url(${CoverImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {});
  return (
    <>
      <div className="">
        <div
          style={coverImageStyle}
          className="md:h-[95vh] h-[600px] w-full flex flex-col md:justify-center justify-start cover-img"
        >
          <div className="lg-info-container">
            <m.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className=" max-w-[750px] bg-white p-10 bg-opacity-90 mx-5 rounded-md shadow-lg"
            >
              <m.div
                initial={{ opacity: 0, y: "10%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
              >
                <h3 className="big-heading font-bold font-['Merriweather'] text-primary-color">
                  Welcome To RangBazaar
                </h3>

                <p className="text-xl font-['Poppins'] ">
                  {/* Your ultimate destination for exquisite desi clothing and
                                  traditional materials. */}
                  Immerse yourself in our vibrant collection, curated with love,
                  where you can explore and shop for the finest selection of
                  ethnic attire, embracing the beauty of our cultural heritage.
                </p>
              </m.div>
              <div className=" overflow-hidden">
                <Link to={"#"}>
                  <m.div
                    initial={{ x: "-100%", opacity: 0.3 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.45, delay: 0.3, ease: "easeIn" }}
                    className="py-4 inline-block text-white hover:bg-red-500 px-20 bg-red-400 mt-4 rounded-md shadow-md "
                  >
                    Get Started
                  </m.div>
                </Link>
              </div>
            </m.div>
          </div>
          {/* display if max with is less than 1024 */}
          <m.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="sm-info-container p-5 bg-opacity-80 bg-primary-color "
          >
            <h3 className="big-heading font-bold font-['Merriweather'] text-white text-center">
              Welcome To RangBazar
            </h3>
            <p className=" font-['Poppins'] text-white text-center mt-3">
              {/* Your ultimate destination for exquisite desi clothing and
                                  traditional materials. */}
              Immerse yourself in our vibrant collection, curated with love,
              where you can explore and shop for the finest selection of ethnic
              attire, embracing the beauty of our cultural heritage.
            </p>
          </m.div>
        </div>
        {/* second container */}
        <div className="max-w-screen-xl mx-auto lg:p-20  p-14 lg:pb-0 pb-0   ">
          <Reveal>
            <h3 className="medium-heading ">Our Collection</h3>
          </Reveal>

          <Reveal>
            <p className="body-text">
              showcases a vibrant array of desi traditional clothing,
              encompassing a variety of styles, colors, and fabrics. From
              stunning sarees, elegant salwar kameez sets, and graceful lehengas
              to dapper sherwanis and stylish kurta pajamas for men, we have
              something to suit every taste and occasion. Our meticulously
              curated selection ensures that you can embrace the timeless
              elegance and grace of traditional attire.
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
              <h3 className="medium-heading">Cultural Heritage</h3>
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

        {/* extra size */}
        <div className="h-[200px]"></div>
      </div>
    </>
  );
};
export default HomePage;
