import React, { useState, useEffect } from "react";
import {
  CartInterF,
  cartProductInterF as CartProductInterF,
  selectedCartItemInterF,
} from "../../Interface/CartInterface";
import ProductsAPIUtils from "../../utils/ProductsAPIUtils";
import { UserInterF } from "../../Interface/UserInterface";
import Utils from "../../utils/Utils";
import CartProductListTile from "./CartProductListTile";
import Error404Page from "../ErrorPage/Error404Page";
import CheckOutPage from "./CheckOutPage";

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartInterF>();
  const [selectedCartItems, setSelectedCartItems] = useState<
    selectedCartItemInterF[]
  >([]);
  const [foreRender, setForeRender] = useState(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [user, setUser] = useState<UserInterF>();
  const [isCheckOut, setIsCheckOut] = useState(false);
  const handleCheckbox = (
    quantity: number,
    price: number,
    isChecked: boolean,
    productID: string
  ) => {
    const productPrice = quantity * price;

    if (isChecked) {
      const tempPrice = totalPrice + productPrice;
      const roundedPrice = tempPrice.toFixed(2);
      setSelectedCartItems((prevItems: selectedCartItemInterF[]) => {
        const newItems: selectedCartItemInterF = {
          quantity: quantity,
          productID: productID,
          price: price,
        };
        return [...prevItems, newItems];
      });

      setTotalPrice(parseFloat(roundedPrice));
    } else {
      setSelectedCartItems((prevItems: selectedCartItemInterF[]) => {
        const updatedItems = prevItems.filter(
          (product) => product.productID != productID
        );
        return [...updatedItems];
      });
      //   setTotalPrice(sumPrice);
    }
  };

  const handleUpdateItemChange = (productID: string, quantity: number) => {
    setSelectedCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => {
        if (item.productID == productID) {
          item.quantity = quantity;
          return item;
        } else {
          return item;
        }
      });

      return [...updatedItems];
    });
  };

  const handleTotalPriceChange = () => {
    setTotalPrice(0);
    let totalPrice = 0;
    selectedCartItems.forEach((item) => {
      totalPrice = totalPrice + item.price * item.quantity;
      totalPrice = parseFloat(totalPrice.toFixed(2));
    });
    setTotalPrice(totalPrice);
  };

  useEffect(() => {
    handleTotalPriceChange();
  }, [handleTotalPriceChange]);

  const handleSetUser = () => {
    Utils.loadUser().then((user_: UserInterF) => {
      if (user_) {
        ProductsAPIUtils.loadCartItems(user_._id as string).then((cart) => {
          if (cart) {
            let updatedCart = cart as CartInterF;
            const updatedProducts = cart.products.map(async (item) => {
              const data = await ProductsAPIUtils.loadProduct(item.productID);
              if (data) {
                return {
                  ...item,
                  image: data.images[0] as string,
                  name: data.name as string,
                };
              }
              return item;
            });

            Promise.all(updatedProducts).then((updatedProductsData) => {
              updatedCart.products = updatedProductsData;
              setCartItems(updatedCart);
            });
          }
        });
      }
      setUser(user);
    });
  };
  const handleRemoveProductFromCart = (userID: string, productID: string) => {
    ProductsAPIUtils.removeProductFromCart(userID, productID).then(() => {
      setCartItems((prevValue) => {
        const updateCartItems = prevValue?.products.filter(
          (prod) => prod.productID != productID
        ) as CartProductInterF[];
        console.log(updateCartItems);
        if (prevValue) {
          prevValue.products = updateCartItems;
        }

        return prevValue;
      });
      setSelectedCartItems((preVal) => {
        const updateSelItems = preVal.filter(
          (prod) => prod.productID !== productID
        );
        return updateSelItems;
      });
      handleTotalPriceChange();
      setForeRender(!foreRender);
    });
  };

  useEffect(() => {
    handleSetUser();
  }, [user]);

  const handleCartItems = (selectedCartItems: selectedCartItemInterF[]) => {
    setCartItems((prevCartItems) => {
      if (!prevCartItems || !prevCartItems.products) {
        return prevCartItems;
      }

      const updatedProducts = prevCartItems.products.filter((prevItem) => {
        return !selectedCartItems.some((selProd) => {
          return prevItem.productID === selProd.productID;
        });
      });

      return { ...prevCartItems, products: updatedProducts };
    });
  };
  const handleIsCheckOut = () => {
    setSelectedCartItems([]);
    setTotalPrice(0);
    setIsCheckOut(false);
  };
  return isCheckOut ? (
    <CheckOutPage
      handleUpdateCartItems={handleCartItems}
      selectedCartItems={selectedCartItems}
      totalPrice={totalPrice}
      handleIsCheckOut={handleIsCheckOut}
    />
  ) : (
    <>
      <div className=" max-w-screen-xl mx-auto my-[100px]">
        <div className="grid md:grid-cols-1">
          {/* left container */}
          <div className="flex flex-row justify-center items-center">
            <div className="p-5 mx-5 w-full">
              <div className="flex flex-row justify-between w-full">
                <h3 className="text-[2.5rem] font-['Montserrat'] font-bold">
                  Cart
                </h3>
                {/* <div className="flex flex-row justify-center items-center h-[60px]">
                  <div className="h-5  hover:text-black text-gray-500 cursor-pointer">
                    <i className="fa fa-trash"></i>{" "}
                    <span className="">Remove</span>
                  </div>
                </div> */}
              </div>

              {/* <----------- product quantity price --------------> */}
              <div className="flex flex-row justify-between uppercase text-gray-500 font-['Montserrat'] mt-2">
                {/* product container */}
                <p>product</p>
                {/* quantity container */}
                <p>quantity</p>
                {/* price container */}
                <p>price</p>
              </div>

              <hr />
              {/* horizantal divier --------------------------> */}
              {/* prodcut list */}
              {cartItems &&
                cartItems.products.map(
                  (product: CartProductInterF, index: number) => {
                    if (product) {
                      return (
                        <CartProductListTile
                          key={product.name + index.toString()}
                          {...product}
                          handleCheckbox={handleCheckbox}
                          handleUpdateItemChange={handleUpdateItemChange}
                          handleRemoveProductFromCart={
                            handleRemoveProductFromCart
                          }
                        />
                      );
                    }
                    return null; // or any placeholder component when the data is undefined
                  }
                )}
            </div>
          </div>
          {/* right container */}
          {cartItems && cartItems.products.length > 0 ? (
            <div className="m-5">
              <div className="md:mt-[30px] rounded-md  md:max-w-xl   mx-auto w-full  border-2 p-5 ">
                <div className="flex flex-row justify-between mb-5">
                  <p className="text-gray-400">Subtotal</p>
                  <p className="font-['Quicksand'] font-bold">${totalPrice}</p>
                </div>
                <div className="flex flex-row justify-between mb-5">
                  <p className="text-gray-400">Tax</p>
                  <p className="font-['Quicksand'] text-gray-500 font-bold">
                    ${0}
                  </p>
                </div>
                <hr />
                <div className="grid md:grid-cols-4 justify-between mb-5">
                  <p className="text-gray-400">GrandTotal</p>
                  <p className="font-['Quicksand'] font-bold">${totalPrice}</p>
                </div>
                <button
                  onClick={() => {
                    if (selectedCartItems.length > 0) {
                      setIsCheckOut(true);
                      window.scrollTo(0, 0);
                    }
                  }}
                  className="py-3 w-full bg-primary-color text-white text-2xl rounded-md text-center bg-opacity-90 hover:bg-opacity-[1]"
                >
                  Checkout Now
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-row justify-center items-center p-[150px] text-2xl text-gray-400">
              <h1>There is no Items added in cart</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
