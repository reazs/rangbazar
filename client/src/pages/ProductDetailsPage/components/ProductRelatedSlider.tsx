import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import products from "../../../models/Products";
import ProductCard from "../../../components/ProductCard";

class ProdcutRelatedSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024, // Adjust settings for screens larger than 1024px
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768, // Adjust settings for screens larger than 768px
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480, // Adjust settings for screens larger than 480px
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const relatedProduct = products.slice(8, 16);

    return (
      <>
        <div className="mx-5">
          <Slider {...settings}>
            {relatedProduct.map((product, index) => {
              return (
                <Link
                  to={`/shop/product-details/${product.title}/${product.id}`}
                  key={index}
                >
                  <ProductCard {...product} />
                </Link>
              );
            })}
          </Slider>
        </div>
      </>
    );
  }
}

export default ProdcutRelatedSlider;
