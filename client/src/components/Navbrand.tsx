import React from "react";
import RangBazarLogo from ".././assets/rangbazar-logo.png";
import { Layout, Fit, useRive, Alignment } from "rive-react";

const Navbrand: React.FC = () => {
  return (
    <>
      <RangBazaarLogo />
    </>
  );
};

export default Navbrand;

const RangBazaarLogo = () => {
  const { RiveComponent } = useRive({
    src: "/riveAssets/rangbazaar-logo.riv",
    stateMachines: "rangbazaar",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  return (
    <>
      <div className="h-full w-full ">
        <RiveComponent />
      </div>
    </>
  );
};
