import React from "react";
import ImageSlider from "./components/ImageSlider";

import slides from "./models/Slides";
import ProductCard from "../../components/ProductCard";
import products from "../../models/Products";
import { SlideTransition } from "../../components/SlideTransition";
const ShopPage: React.FC = () => {
  return (
    <>
      <div className="w-full h-[45vh] mx-auto">
        <ImageSlider slides={slides} />
      </div>
      <div className="p-5 max-w-screen-xl mx-auto">
        <h3 className="medium-heading">Shop</h3>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 lg:pl-0 md:pl-0 sm:pl-0 ">
          {products.map((product, index) => (
            <SlideTransition delay={0.2 + (index % 4) / 10}>
              <ProductCard key={index} {...product} />
            </SlideTransition>
          ))}
        </div>
      </div>
    </>
  );
};
export default ShopPage;
