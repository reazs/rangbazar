import React from "react";
import CoverImage from "../../assets/rangbazar-cover-img.jpg";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
const HomePage: React.FC = () => {
  const coverImageStyle = {
    backgroundImage: `url(${CoverImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div className="">
        <div
          style={coverImageStyle}
          className="h-[800px] w-full flex flex-col justify-center"
        >
          <div className="overflow-hidden">
            <m.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className=" max-w-[600px] bg-white p-10 bg-opacity-90 mx-5 rounded-md shadow-lg"
            >
              <m.div
                initial={{ opacity: 0, y: "10%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
              >
                <h3 className="big-heading font-bold font-['Merriweather'] text-primary-color">
                  Welcome To RangBazar
                </h3>
                <p className="text-xl font-['Poppins']">
                  {/* Your ultimate destination for exquisite desi clothing and
                                  traditional materials. */}
                  Immerse yourself in our vibrant collection, curated with love,
                  where you can explore and shop for the finest selection of
                  ethnic attire, embracing the beauty of our cultural heritage.
                </p>
              </m.div>
              <div className=" overflow-hidden">
                <Link to={"#"}>
                  <m.div
                    initial={{ x: "-100%", opacity: 0.3 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.45, delay: 0.3, ease: "easeIn" }}
                    className="py-4 inline-block text-white hover:bg-red-500 px-20 bg-red-400 mt-4 rounded-md shadow-md "
                  >
                    Get Started
                  </m.div>
                </Link>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
