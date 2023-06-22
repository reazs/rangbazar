import { useState } from "react";
import { cartProductInterF } from "../../Interface/CartInterface";
const CartProductListTile = ({
  image,
  price,
  size,
  quantity,
  name,
  productID,
  handleCheckbox,
  handleUpdateItemChange,
}: {
  image: string;
  price: number;
  size: string;
  productID: string;
  quantity: number;
  name: string;
  handleUpdateItemChange: (prodcutID: string, quantity: number) => void;
  handleCheckbox: (
    quantity: number,
    price: number,
    isChecked: boolean,
    prodcutID: string
  ) => void;
}) => {
  const [quantityChange, setQuantityChange] = useState<number>(quantity);
  return (
    <div className="flex flex-row justify-between mt-5">
      {/* product with checkbox */}
      <div className="flex flex-row justify-start items-center w-full">
        <input
          type="checkbox"
          className="h-[20px] w-[20px] mr-2 cursor-pointer"
          onChange={(e) => {
            const isChecked = e.target.checked;
            handleCheckbox(quantityChange, price, isChecked, productID);
          }}
        ></input>
        <img
          src={image}
          className="h-[70px] w-[70px] rounded-md mr-2 object-cover"
        />
        <div className="max-w-[110px]">
          <p className=" line-clamp-1 overflow-clip font-['Quicksand'] font-bold">
            {name}
          </p>
          <p className="text-gray-500">Green: {size}</p>
        </div>
      </div>
      {/* quantity with removing icon for product */}
      <div className="w-full">
        {/* adding and removing + - */}
        <div className="w-[100px]">
          <div className="border-2 p-1 rounded-md px-3 max-w-[100px]">
            <i
              onClick={() => {
                const updatedQuantity = quantityChange + 1;
                setQuantityChange(updatedQuantity);
                handleUpdateItemChange(productID, updatedQuantity);
              }}
              className="fa fa-plus  mr-3 cursor-pointer"
            ></i>
            <span>{quantityChange}</span>
            <i
              onClick={() => {
                if (quantityChange > 1) {
                  const updatedQuantity = quantityChange - 1;
                  setQuantityChange(updatedQuantity);
                  handleUpdateItemChange(productID, updatedQuantity);
                }
              }}
              className="fa fa-minus cursor-pointer ml-3"
            ></i>
          </div>
          <div className="mt-3 text-gray-500 cursor-pointer hover:text-black flex flex-row justify-center">
            <div className="">
              {" "}
              <i className="fa fa-trash mr-1 text-center"></i>{" "}
            </div>
            <span>Remove</span>
          </div>
        </div>
      </div>
      {/* price of product */}
      <div className="flex flex-row justify-center items-center">
        <p>${price}</p>
      </div>
    </div>
  );
};

export default CartProductListTile;
