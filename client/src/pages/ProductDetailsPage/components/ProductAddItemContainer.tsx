import RiveAddAnimatedBtn from "../../../components/RiveAddAnimatedBtn";
import { useState, useEffect } from "react";
import UtilRiveComponent from "../../../utils/UtilRiveComponent";
import { Link } from "react-router-dom";
import Utils from "../../../utils/Utils";
const ProductAddItemContainer = ({
  handleAddCart,
  handleChangeQuantity,
}: {
  handleAddCart: (btnState: string) => void;
  handleChangeQuantity: (quantity: number) => void;
}) => {
  const [isShowDialog, setIsShowDialog] = useState<boolean>(false);
  useEffect(() => {}, [setIsShowDialog]);
  return (
    <>
      <div className="h-[82px] mt-[50px]">
        <div className="h-[52px] mt-[16px] flex items-end">
          <div className="h-full flex flex-row">
            {/* quantity number */}
            <div className="w-[70px] h-[52px]">
              <div className="">
                <input
                  type="number"
                  className="mx-auto h-[50px]  px-2 py-[2.8px] w-full focus:outline-none text-center"
                  defaultValue={1}
                  onChange={(event) => {
                    const value = event.target.value;
                    handleChangeQuantity(parseInt(value));
                  }}
                />
                <div className="border border-b-primary-color w-full"></div>
              </div>
            </div>
            {/* add to cart button */}
            {/* <div className="md:w-[230px]  md:text-[16px] text-[12px] h-[52px]  px-[50px] mx-5  text-center flex flex-col justify-around   cursor-pointer">
              <span className="">Add to Cart</span>
            </div> */}
            <div
              onClick={() => {
                Utils.delay(1500).then(() => {
                  setIsShowDialog(true);
                });
              }}
              className="h-[52px] lg:w-[280px] w-[230px]"
            >
              <RiveAddAnimatedBtn
                changeState={handleAddCart}
                src={"/add-animated-btn.riv"}
              />
            </div>
            {/* add to favorite */}
            {/* <div className=" mx-[10px] h-full  p-4 border-gray-300 border flex flex-col justify-center hover:bg-primary-color hover:text-white cursor-pointer">
              <FontAwesomeIcon icon={faHeart} />
            </div> */}
            <div className=" h-[52px] w-[52px] ">
              <Link to="#">
                <UtilRiveComponent
                  src="/rive-heart-icons.riv"
                  artboardName="favorite "
                  isActive={false}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isShowDialog && (
        <div className="fixed inset-0 bg-black backdrop:blur-sm bg-opacity-30 flex justify-center items-center z-10">
          <div className="p-5 bg-white max-w-md rounded-md">
            <p className="text-xl font-['Quicksand'] mb-10">
              Your product has been added to the Cart. You you want to continue
              shopping or checkout.
            </p>
            <div className="flex flex-row-reverse">
              <Link
                to={"/user/cart"}
                role="button"
                className="p-3 px-8  border-2 border-primary-color rounded-md bg-primary-color opacity-90 hover:opacity-[1] text-white"
              >
                View Cart
              </Link>
              <div className="w-4"></div>

              <div
                role="button"
                className="p-3 border-2 border-primary-color rounded-md hover:bg-primary-color hover:text-white"
                onClick={() => {
                  setIsShowDialog(false);
                }}
              >
                Continue Shopping
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductAddItemContainer;
