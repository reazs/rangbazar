import React, { useEffect, useRef } from "react";
import { Reveal } from "../../../components/Reveal";
import { motion as m, useInView, useAnimation } from "framer-motion";
import ShoppingCoverImg from "../../../assets/online-shopper.png";
import OnlineShoppingImg from "../../../assets/online_shopping.svg";

const HomeBottomContainer: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controller = useAnimation();
  useEffect(() => {
    if (isInView) {
      controller.start("show");
    }
  });
  return (
    <>
      <div className=" w-full lg:p-20 md:p-16 p-12 py-20 bg-secondary-color  flex flex-col justify-center ">
        <div
          ref={ref}
          className="max-w-screen-xl mx-auto grid md:grid-cols-2 grid-cols-1"
        >
          {/* left container */}
          <div className="overflow-hidden">
            <m.div
              variants={{
                hidden: { x: "100%", filter: "blur(6px)" },
                show: { x: 0, filter: "blur(0)" },
              }}
              initial="hidden"
              animate={controller}
              transition={{ duration: 0.75 }}
              className=" object-cover  "
            >
              <img className="" src={ShoppingCoverImg} />
            </m.div>
          </div>
          {/* right container */}
          <div className="object-cover flex flex-col justify-center mx-auto">
            <Reveal color="white">
              <h1 className="big-heading text-white">Online Shopping</h1>
            </Reveal>
            <Reveal color="white">
              <p className="body-text text-white ">
                Shop online at RangBazaar for traditional desi clothes and
                items. Easy navigation, rich collection, and cultural heritage
                at your fingertips.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      {/* join us */}
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
              cultural treasures at Rangbazaar. Embark on a delightful adventure
              that transports you to the realm of timeless traditions and
              enchanting aesthetics. Join us today!
            </p>
          </Reveal>
        </div>
        <img
          className="mx-auto mt-[50px] max-h-[400px]"
          src={OnlineShoppingImg}
        />
      </div>
    </>
  );
};

export default HomeBottomContainer;
