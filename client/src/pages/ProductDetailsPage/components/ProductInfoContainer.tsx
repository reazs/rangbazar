import { Reveal } from "../../../components/Reveal";
import { Product } from "../../../models/Products";
import Navbrand from "../../../components/navbrand";
import ProdcutRelatedSlider from "./ProductRelatedSlider";
import ProductCustomerReview from "./ProductCustomerReview";

const ProductInfoContainer = ({
  product,
}: {
  product: Product | undefined;
}) => {
  return (
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
      <ProductCustomerReview product={product} />
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
      {/*  related product slider*/}
      <ProdcutRelatedSlider />
    </div>
  );
};

export default ProductInfoContainer;
