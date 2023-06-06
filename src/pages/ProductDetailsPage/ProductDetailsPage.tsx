import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products, { Product } from "../../models/Products";
import Footer from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import ProductImageView from "./components/ProductImageView";
import ProductMiniImgPreview from "./components/ProudctMiniImgPreview";
import ProductSizesContainer from "./components/ProductSizesContainer";
import ProductColorsContainer from "./components/ProductColorsContainer";
import ProductInfoContainer from "./components/ProductInfoContainer";
import ProductAddItemContainer from "./components/ProductAddItemContainer";
import loadingLottieData from "../../../public/colors-loading.json";
import PresentAnimation from "../../components/PresentAnimation";
import Lottie from "lottie-react";
import Utils from "../../utils/ScreenTimeUtils";
import ColorLoading from "../../components/ColorLoading";
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
  const [isPresentShow, setPresentShow] = useState(true);
  function handleShowPresent() {
    Utils.delay(600).then(() => setPresentShow(false));
  }
  useEffect(() => {
    handleShowPresent();
  }, [handleShowPresent]);

  return (
    <>
      {isPresentShow ? (
        <ColorLoading />
      ) : (
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
              <ProductAddItemContainer />
              {/* mini description */}

              <div className="uppercase text-[14px] leading-8 mt-4 mb-2">
                <p className="">Free worldwide shipping</p>
                <p className="">100% best quality</p>
                <p>29% discount for pay via paypal</p>
              </div>
            </div>
          </div>
          {/* product description and details container*/}
          <ProductInfoContainer product={product} />
          <Footer />
        </>
      )}
    </>
  );
};
export default ProductDetailsPage;
