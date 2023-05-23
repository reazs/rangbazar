import React, { useEffect, useRef } from "react";
import { Reveal } from "../../../components/Reveal";
import { motion as m, useInView, useAnimation } from "framer-motion";
import OnlineShoppingImg from "../../../assets/online-shopper.png";

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
      <div className=" w-full lg:p-20 md:p-16 p-12 py-20 bg-secondary-color  flex flex-col justify-center">
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
              <img className="" src={OnlineShoppingImg} />
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
    </>
  );
};

export default HomeBottomContainer;
