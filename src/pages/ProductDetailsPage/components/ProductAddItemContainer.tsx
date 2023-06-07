import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import RiveAddAnimatedBtn from "../../../components/RiveAddAnimatedBtn";
import addBtnData from "../../../../public/add-to-cart-button.json";
import Lottie from "lottie-react";
import UtilRiveComponent from "../../../utils/UtilRiveComponent";
import { Link } from "react-router-dom";
const ProductAddItemContainer = () => {
  return (
    <>
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
            {/* <div className="md:w-[230px]  md:text-[16px] text-[12px] h-[52px]  px-[50px] mx-5  text-center flex flex-col justify-around   cursor-pointer">
              <span className="">Add to Cart</span>
            </div> */}
            <div className="h-[52px] lg:w-[280px] w-[230px]">
              <RiveAddAnimatedBtn
                src={"../../../../public/add-animated-btn.riv"}
              />
            </div>
            {/* add to favorite */}
            {/* <div className=" mx-[10px] h-full  p-4 border-gray-300 border flex flex-col justify-center hover:bg-primary-color hover:text-white cursor-pointer">
              <FontAwesomeIcon icon={faHeart} />
            </div> */}
            <div className=" h-[52px] w-[52px] ">
              <Link to="#">
                <UtilRiveComponent
                  src="../../../../public/rive-heart-icons.riv"
                  artboardName="favorite "
                  isActive={false}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAddItemContainer;
