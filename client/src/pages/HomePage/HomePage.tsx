import React, { useEffect } from "react";
import "./HomePage.css";
import HomeMiddleContainer from "./components/HomeMiddleContainer";
import HomeCoverContainer from "./components/HomeCoverContainer";
import HomeBottomContainer from "./components/HomeBottomContainer";
import Footer from "../../components/Footer";
const HomePage: React.FC = () => {
  useEffect(() => {});

  return (
    <>
      <div className="">
        <HomeCoverContainer />
        <HomeMiddleContainer />
        <HomeBottomContainer />
        <Footer />
      </div>
    </>
  );
};
export default HomePage;
