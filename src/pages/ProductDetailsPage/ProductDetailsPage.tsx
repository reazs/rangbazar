import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products, { Product } from "../../models/Products";
import Footer from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import ProductSizeBtn from "./components/ProductSizeBtn";
import ProductColorBtn from "./components/ProductColorBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Navbrand from "../../components/navbrand";
import ProductImageView from "./components/ProductImageView";
import ProductMiniImgPreview from "./components/ProudctMiniImgPreview";
import ProductSizesContainer from "./components/ProductSizesContainer";
import ProductColorsContainer from "./components/ProductColorsContainer";
const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams();
  const product: Product | undefined = products.find((product) => {
    return Number(productId) === product.id && product;
  });
  const [selectedSize, setSelectedSize] = useState("");
  const [activeColor, setActiveColor] = useState("");
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const handleColorSelect = (newColor: string) => {
    setActiveColor(newColor);
  };
  function handleSelect(size: string): void {
    setSelectedSize(size);
  }
  function handleCurrentImgIndex(index: number) {
    setCurrentImgIndex(index);
  }
  window.scrollTo(0, 0);

  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 max-w-screen-xl  mx-auto mt-[50px] gap-5 p-10">
        {/* left container */}
        <div className="">
          <ProductImageView src={product?.images[currentImgIndex] + ""} />
          {/* mini img preview */}
          <ProductMiniImgPreview
            product={product}
            currentImgIndex={currentImgIndex}
            handleCurrentImgIndex={handleCurrentImgIndex}
          />
        </div>
        {/* right container */}
        <div>
          <Reveal>
            <p className="large-thin-heading">{product?.title}</p>
          </Reveal>

          <div className="text-[28px ] font-medium mb-4">
            <span className="">€{product?.price}</span>
          </div>
          <div className="mb-4">
            <span className="text-[10pt] ">White Ceramic Mug, 325ml.</span>
          </div>
          {/* size section */}

          <ProductSizesContainer
            product={product}
            handleSelect={handleSelect}
            selectedSize={selectedSize}
          />

          {/* color section */}
          <ProductColorsContainer
            product={product}
            handleColorSelect={handleColorSelect}
            activeColor={activeColor}
          />
          {/* Add card section*/}

          <div className="h-[82px] mt-[50px]">
            <div className="h-[52px] mt-[16px] flex items-end">
              <div className="h-full flex flex-row">
                {/* quantity number */}
                <div className="w-[70px] h-[52px]">
                  <div className="">
                    <input
                      className="mx-auto h-[50px]  px-2 py-[2.8px] w-full focus:outline-none text-center"
                      defaultValue={1}
                    />
                    <div className="border border-b-primary-color w-full"></div>
                  </div>
                </div>
                {/* add to cart button */}
                <div className="w-[230px] h-[52px] bg-primary-color px-[50px] mx-5 border-2 text-center flex flex-col justify-around text-white hover:bg-white hover:text-primary-color border-primary-color cursor-pointer">
                  <span className="">Add to Cart</span>
                </div>
                {/* add to favorite */}
                <div className=" mx-[10px] h-full  p-4 border-gray-300 border flex flex-col justify-center hover:bg-primary-color hover:text-white cursor-pointer">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </div>
            </div>
          </div>
          {/* mini description */}

          <div className="uppercase text-[14px] leading-8 mt-4 mb-2">
            <p className="">Free worldwide shipping</p>
            <p className="">100% best quality</p>
            <p>29% discount for pay via paypal</p>
          </div>
        </div>
      </div>
      {/* product description and details container*/}
      <div className="mt-[50px] max-w-screen-xl mx-auto px-[15px] ">
        <div className="py-[15px] mb-[45px]">
          <Reveal>
            <h4 className="medium-thin-heading ">Description</h4>
          </Reveal>
        </div>

        <div className="text-[16px] leading-8 large-first-letter mb-[50px]">
          <p>{product?.description}</p>
        </div>
        {/* product details */}
        <div>
          <div className="py-[15px] mb-[45px]">
            <Reveal>
              <h4 className="medium-thin-heading ">Product Details</h4>
            </Reveal>
          </div>

          <div>
            {/* show maybe company brand of cloths */}
            <Navbrand />
          </div>
          <div className="mb-15 py-[15px] mr-[35px]">
            <p className="">Reference Demo_{product?.id}</p>
            <p className="text-[16px]  leading-9">
              In Stock Items {product?.images.length}
            </p>
          </div>
        </div>
        {/* review of product */}
        <div className="mb-[45px] mr-[35px]">
          <p className="medium-thin-heading py-[15px]">Review</p>
          <p>{product?.rating}</p>
        </div>
        {/* related items container */}
        <div className="">
          <div className="flex flex-row justify-center">
            <Reveal>
              <h4 className="medium-thin-heading text-center">Related Items</h4>
            </Reveal>
          </div>
          <p className="pt-[30px] pb-[60px] text-gray-500 josefin-sans text-center">
            (There are 8 other products in the same category)
          </p>
        </div>
        {/*  */}
      </div>

      <Footer />
    </>
  );
};
export default ProductDetailsPage;
