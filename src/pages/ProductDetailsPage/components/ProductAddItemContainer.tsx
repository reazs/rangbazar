import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
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
            <div className="md:w-[230px]  md:text-[16px] text-[12px] h-[52px] bg-primary-color px-[50px] mx-5 border-2 text-center flex flex-col justify-around text-white hover:bg-white hover:text-primary-color border-primary-color cursor-pointer">
              <span className="">Add to Cart</span>
            </div>
            {/* add to favorite */}
            <div className=" mx-[10px] h-full  p-4 border-gray-300 border flex flex-col justify-center hover:bg-primary-color hover:text-white cursor-pointer">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAddItemContainer;
