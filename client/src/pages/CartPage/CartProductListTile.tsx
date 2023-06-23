import { useState, useEffect } from "react";
import { colors } from "../../models/Products";
import { UserInterF } from "../../Interface/UserInterface";
import Utils from "../../utils/Utils";
import ProductsAPIUtils from "../../utils/ProductsAPIUtils";
const CartProductListTile = ({
  image,
  price,
  size,
  quantity,
  name,
  productID,
  handleCheckbox,
  handleUpdateItemChange,
  handleRemoveProductFromCart,
  color,
  stocks,
}: {
  image: string;
  price: number;
  size: string;
  productID: string;
  quantity: number;
  name: string;
  color: string;
  stocks: string;
  handleRemoveProductFromCart: (userID: string, productID: string) => void;
  handleUpdateItemChange: (prodcutID: string, quantity: number) => void;
  handleCheckbox: (
    quantity: number,
    price: number,
    isChecked: boolean,
    prodcutID: string
  ) => void;
}) => {
  const [quantityChange, setQuantityChange] = useState<number>(quantity);
  const colorName = colors.filter((colour) => {
    if (colour.value == color) {
      return colour.name;
    }
  });

  const [user, setUser] = useState<UserInterF>();
  // const handleRemoveProductFromCart = () => {
  //   const userID = user?._id as string;
  //   ProductsAPIUtils.removeProductFromCart(userID, productID).then(() => {
  //     location.reload();
  //   });
  // };

  useEffect(() => {
    Utils.loadUser().then((user: UserInterF) => {
      setUser(user);
    });
  }, [user]);

  return (
    <div className="flex flex-row justify-between mt-5 ">
      {/* product with checkbox */}
      <div className="flex flex-row justify-start items-center w-full">
        <input
          type="checkbox"
          className=" md:h-[20px] md:w-[20px]  mr-2 cursor-pointer"
          onChange={(e) => {
            const isChecked = e.target.checked;
            handleCheckbox(quantityChange, price, isChecked, productID);
          }}
        ></input>
        <img
          src={image}
          className="h-[100px] w-[90px] rounded-md mr-2 object-cover"
        />
        <div className="">
          <p className=" line-clamp-1 overflow-clip font-['Quicksand'] ">
            {name}
          </p>
          <p className="text-gray-500">
            {colorName[0].name}: {size}
          </p>
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

                if (updatedQuantity < parseInt(stocks)) {
                  setQuantityChange(updatedQuantity);
                  handleUpdateItemChange(productID, updatedQuantity);
                }
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
          <div
            onClick={() => {
              handleRemoveProductFromCart(user?._id as string, productID);
            }}
            className="mt-3 text-gray-500 cursor-pointer hover:text-black flex flex-row justify-center"
          >
            {/* deleting the item in cart */}
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
