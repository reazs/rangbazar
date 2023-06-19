import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ProductCard from "../../../components/ProductCard";
import { ClothingProductInterF } from "../../../Interface/Product";
import BASE_URL from "../../../config/BaseURL";
import ProductsAPIUtils from "../../../utils/ProductsAPIUtils";

const ProdcutRelatedSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [products, setProducts] = useState<ClothingProductInterF[]>([]);
  function handleSetProduct(data: ClothingProductInterF[]) {
    setProducts(data);
  }
  useEffect(() => {
    ProductsAPIUtils.loadProducts(handleSetProduct);
  }, []);

  return (
    <>
      <Slider {...settings}>
        {products.map((product, index) => (
          <ProductCard {...product} />
        ))}
      </Slider>
    </>
  );
};

export default ProdcutRelatedSlider;
