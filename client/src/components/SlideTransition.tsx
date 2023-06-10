import React, { useEffect, useRef } from "react";
import { motion as m, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay?: number;
  repeat?: "yes" | "no";
}

export const SlideTransition = ({
  children,
  width = "fit-content",
  delay = 0,
  repeat = "no",
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      // fire animation
      mainControls.start("show");
    } else {
      if (repeat == "yes") {
        mainControls.start("hidden");
      }
    }
  });
  return (
    <>
      <div
        ref={ref}
        style={{ position: "relative", width, overflow: "hidden" }}
      >
        <m.div
          variants={{
            hidden: { x: "-100%" },
            show: { x: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: delay }}
          initial="hidden"
          animate={mainControls}
        >
          {children}
        </m.div>
      </div>
    </>
  );
};
