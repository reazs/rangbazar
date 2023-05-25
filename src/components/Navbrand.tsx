import React from "react";
import RangBazarLogo from ".././assets/rangbazar-logo.png";

const Navbrand: React.FC = () => {
  return (
    <>
      <span className="font-['Poppins'] font-bold ">
        <span className="text-pink-500">Rang</span>
        <span className="text-teal-500">Bazaar</span>
      </span>
      <img className="inline-block" src={RangBazarLogo} width={35} />
    </>
  );
};

export default Navbrand;
