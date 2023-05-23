import React, { useEffect } from "react";
import CoverImage from "../../assets/rangbazar-cover-img.jpg";

import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import { Reveal } from "../../components/Reveal";
import { SlideTransition } from "../../components/SlideTransition";
import "./HomePage.css";
import HomeMiddleContainer from "./components/HomeMiddleContainer";
import HomeCoverContainer from "./components/HomeCoverContainer";
import HomeBottomContainer from "./components/HomeBottomContainer";
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
        <HomeCoverContainer />
        <HomeMiddleContainer />
        <HomeBottomContainer />
        {/* extra size */}
        <div className="h-[200px]"></div>
      </div>
    </>
  );
};
export default HomePage;
