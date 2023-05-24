import React, { useEffect } from "react";
import OnlineShopingImg from "../../assets/online_shopping.svg";
import "./HomePage.css";
import HomeMiddleContainer from "./components/HomeMiddleContainer";
import HomeCoverContainer from "./components/HomeCoverContainer";
import HomeBottomContainer from "./components/HomeBottomContainer";
import { Reveal } from "../../components/Reveal";
const HomePage: React.FC = () => {
  useEffect(() => {});
  return (
    <>
      <div className="">
        <HomeCoverContainer />
        <HomeMiddleContainer />
        <HomeBottomContainer />
        <div className="mt-[100px] w-full max-w-screen-xl mx-auto p-10 ">
          <div>
            <div className="flex flex-row justify-center">
              <Reveal>
                <h1 className="big-heading text-primary-color text-center">
                  Join Us
                </h1>
              </Reveal>
            </div>
            <Reveal>
              <p className="body-text text-center">
                Explore the captivating world of desi traditional clothing and
                cultural treasures at Rangbazaar. Embark on a delightful
                adventure that transports you to the realm of timeless
                traditions and enchanting aesthetics. Join us today!
              </p>
            </Reveal>
          </div>
          <img
            className="mx-auto mt-[50px] max-h-[400px]"
            src={OnlineShopingImg}
          />
        </div>
        {/* extra size */}
        <div className="h-[200px]"></div>
      </div>
    </>
  );
};
export default HomePage;
