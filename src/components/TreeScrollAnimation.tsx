import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "rive-react";
import { useEffect, useState } from "react";

const TreeScrollAnimation = () => {
  const STATE_MACHINE_NAME = "State Machine 1";
  const INPUT_NAME = "input";
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //source: https://rive.app/community/715-1406-water-bar-demo/
  const { RiveComponent, rive } = useRive({
    src: "tree_demo.riv",
    stateMachines: STATE_MACHINE_NAME,
    artboard: "New Artboard",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  const treeLevel = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME);
  if (treeLevel) {
    treeLevel.value = 0;
  }

  useEffect(() => {
    function increaseWaterLevel() {
      const scrollY = window.scrollY;
      const windowHight = window.innerHeight as number;
      const scrollableHeight = (document.documentElement.scrollHeight -
        windowHight) as number;
      const scrollPercentage = (scrollY / scrollableHeight) * 100;
      if (treeLevel) {
        treeLevel.value = scrollPercentage;
      }
      console.log(scrollY);
    }
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("scroll", increaseWaterLevel);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", increaseWaterLevel);
    };
  });
  return (
    <>
      <div className="">
        <div className="">
          <div
            id="rive-animation"
            style={{
              display: windowWidth < 1400 ? "none" : "",
              position: "fixed",
              top: "90px",
              right: "0",
              width: "600px",
              height: "95%",
            }}
          >
            <RiveComponent className="h-full w-full " />
          </div>
        </div>
      </div>
    </>
  );
};

export default TreeScrollAnimation