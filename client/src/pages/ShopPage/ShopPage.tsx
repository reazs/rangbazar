import React, { useState, useEffect } from "react";
import { Routes, Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import products from "../../models/Products";
import { SlideTransition } from "../../components/SlideTransition";
import "./ShopPage.css";
import { Reveal } from "../../components/Reveal";
import Footer from "../../components/Footer";
import SlideShow from "./components/SlideShow";
import Utils from "../../utils/ScreenTimeUtils";
import ColorLoading from "../../components/ColorLoading";

const ShopPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil(products.length / itemsPerPage);

  const [isLoadingShow, setIsLoadingShow] = useState(true);

  useEffect(() => {
    Utils.delay(800).then(() => {
      setIsLoadingShow(false);
    });
  });
  return isLoadingShow ? (
    <>
      <ColorLoading />
    </>
  ) : (
    <>
      <SlideShow />
      <div className="p-5 max-w-screen-xl mx-auto mt-[50px]">
        <Reveal>
          <h3 className="large-thin-heading font-['Poppins'] mb-5">
            Our Latest Collection.
          </h3>
        </Reveal>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2  lg:pl-0 md:pl-0 sm:pl-0 ">
          {currentItems.map((product, index) => (
            <>
              <SlideTransition
                key={index}
                repeat="yes"
                delay={0.2 + (index % 4) / 10}
              >
                <Link
                  to={
                    "/shop/product-details/" + product.title + "/" + product.id
                  }
                >
                  <ProductCard key={index} {...product} />
                </Link>
              </SlideTransition>
            </>
          ))}
        </div>
        <div className="mt-10 flex flex-row justify-center">
          <i
            onClick={() => {
              if (currentPage > 1) {
                window.scrollTo(0, 500);
                setCurrentPage(currentPage - 1);
              }
            }}
            className="fa-solid fa-angle-left text-white p-2 bg-primary-color hover:bg-[#33c9db] cursor-pointer"
          ></i>
          <div className="mx-[4%]">
            <p className="text-2xl">{currentPage}</p>
          </div>
          <i
            onClick={() => {
              if (currentPage < totalPage) {
                window.scrollTo(0, 500);
                setCurrentPage(currentPage + 1);
              }
            }}
            className="fa-solid fa-angle-right text-white p-2 bg-primary-color hover:bg-[#33c9db] cursor-pointer"
          ></i>
        </div>
      </div>
      <Footer />
      <Routes></Routes>
    </>
  );
};
export default ShopPage;