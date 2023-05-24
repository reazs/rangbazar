import React, { useEffect } from "react";
import "./HomePage.css";
import HomeMiddleContainer from "./components/HomeMiddleContainer";
import HomeCoverContainer from "./components/HomeCoverContainer";
import HomeBottomContainer from "./components/HomeBottomContainer";
const HomePage: React.FC = () => {
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
