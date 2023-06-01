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
    };
    const relatedProduct = products.slice(8, 16);
    return (
      <>
        <div className="mx-5">
          <Slider {...settings}>
            {relatedProduct.map((product, index) => {
              return (
                <>
                  <Link
                    to={
                      "/shop/product-details/" +
                      product.title +
                      "/" +
                      product.id
                    }
                  >
                    <ProductCard key={index} {...product} />
                  </Link>
                </>
              );
            })}
          </Slider>
        </div>
      </>
    );
  }
}

export default ProdcutRelatedSlider;
