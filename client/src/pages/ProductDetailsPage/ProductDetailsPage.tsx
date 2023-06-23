import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
// import products, { Product } from "../../models/Products";
import Footer from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import ProductImageView from "./components/ProductImageView";
import ProductMiniImgPreview from "./components/ProudctMiniImgPreview";
import ProductSizesContainer from "./components/ProductSizesContainer";
import ProductColorsContainer from "./components/ProductColorsContainer";
import ProductInfoContainer from "./components/ProductInfoContainer";
import ProductAddItemContainer from "./components/ProductAddItemContainer";
import Utils from "../../utils/Utils";
import ColorLoading from "../../components/ColorLoading";
import { ClothingProductInterF } from "../../Interface/Product";
import BASE_URL from "../../config/BaseURL";
import ProductsAPIUtils from "../../utils/ProductsAPIUtils";
import { cartProductInterF } from "../../Interface/CartInterface";
import { UserInterF } from "../../Interface/UserInterface";
const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<ClothingProductInterF>();
  const [btnState, setBtnState] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>();
  const [quantity, setQuantity] = useState<number>(1);
  const [activeColor, setActiveColor] = useState<string>();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [user, setUser] = useState<UserInterF>();
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
    Utils.delay(500).then(() => setPresentShow(false));
  }
  const loadUser = () => {
    Utils.loadUser().then((data) => {
      setUser(data as UserInterF);
    });
  };
  async function handleLoadProduct() {
    try {
      const url = BASE_URL + "/product?id=" + productId;
      const response = await fetch(url, {
        method: "GET",
      });
      const product_: ClothingProductInterF = await response.json();
      if (response.status == 200) {
        setProduct(product_);
        console.log(product?._id);
      }
    } catch (error) {
      console.error(error);
    }
  }
  const handleChangeQuantity = (quantity: number) => {
    setQuantity(quantity);
  };
  const handleBtnState = (btnState: string) => {
    if (btnState.includes("idle in click res")) {
      setBtnState(true);
    }
  };
  const handleAddCart = () => {
    if (btnState) {
      ProductsAPIUtils.addProductToCart(
        product as ClothingProductInterF,
        selectedSize,
        activeColor,
        quantity,
        user?._id as string
      );
    }
  };
  useEffect(() => {
    loadUser();
    handleAddCart();
    handleShowPresent();
    handleLoadProduct();
  }, [selectedSize, activeColor, btnState, quantity]);

  return (
    <>
      {isPresentShow ? (
        <ColorLoading />
      ) : (
        <>
          {product && (
            <>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 max-w-screen-xl  mx-auto mt-[50px] gap-5 p-10">
                {/* left container */}
                <div className="">
                  <ProductImageView
                    src={product.images[currentImgIndex] + ""}
                  />
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
                    <p className="large-thin-heading">{product?.name}</p>
                  </Reveal>

                  <div className="text-[28px ] font-medium mb-4">
                    <span className="">€{product?.price}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-[10pt] ">
                      White Ceramic Mug, 325ml.
                    </span>
                  </div>
                  {/* size section */}

                  <ProductSizesContainer
                    product={product}
                    handleSelect={handleSelect}
                    selectedSize={selectedSize as string}
                  />

                  {/* color section */}
                  <ProductColorsContainer
                    product={product}
                    handleColorSelect={handleColorSelect}
                    activeColor={activeColor as string}
                  />
                  {/* Add card section*/}
                  <ProductAddItemContainer
                    handleChangeQuantity={handleChangeQuantity}
                    handleAddCart={handleBtnState}
                  />
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
            </>
          )}

          <Footer />
        </>
      )}
    </>
  );
};
export default ProductDetailsPage;
