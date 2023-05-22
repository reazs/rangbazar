import React, { useEffect } from "react";
import CoverImage from "../../assets/rangbazar-cover-img.jpg";
import { Link, json } from "react-router-dom";
import { motion as m } from "framer-motion";
import "./HomePage.css";
const HomePage: React.FC = () => {
  const coverImageStyle = {
    backgroundImage: `url(${CoverImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  useEffect(() => {
    const url = "https://api.jikan.moe/v4/anime";
    interface Anime {
      title: string;
    }
    try {
      fetch(url).then((response) => {
        if (response.status == 200) {
          response.json().then((data) => {
            const allAnime: Anime[] = data.data;
            allAnime.forEach((anime) => {
              console.log(anime.title);
            });
          });
        }
      });
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <>
      <div className="">
        <div
          style={coverImageStyle}
          className="md:h-[800px] h-[600px] w-full flex flex-col md:justify-center justify-start cover-img"
        >
          <div className="lg-info-container">
            <m.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className=" max-w-[750px] bg-white p-10 bg-opacity-90 mx-5 rounded-md shadow-lg"
            >
              <m.div
                initial={{ opacity: 0, y: "10%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
              >
                <h3 className="big-heading font-bold font-['Merriweather'] text-primary-color">
                  Welcome To RangBazaar
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
          {/* display if max with is less than 1024 */}
          <div className="sm-info-container p-5 bg-opacity-60 ">
            <h3 className="big-heading font-bold font-['Merriweather'] text-white text-center">
              Welcome To RangBazar
            </h3>
            <p className=" font-['Poppins'] text-white text-center mt-3">
              {/* Your ultimate destination for exquisite desi clothing and
                                  traditional materials. */}
              Immerse yourself in our vibrant collection, curated with love,
              where you can explore and shop for the finest selection of ethnic
              attire, embracing the beauty of our cultural heritage.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
