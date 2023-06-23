import React, { useState } from "react";
import {
  CartInterF,
  selectedCartItemInterF,
} from "../../Interface/CartInterface";
import CheckOutSideProductTile from "./CheckOutSideProductTile";

const CheckOutPage = ({
  selectedCartItems,
  totalPrice,
  handleIsCheckOut,
}: {
  selectedCartItems: selectedCartItemInterF[];
  totalPrice: number;
  handleIsCheckOut: () => void;
}) => {
  const [cardType, setCardType] = useState<string>("");
  const handleRadioEventChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setCardType(value);
  };
  return (
    <>
      <div className=" max-w-screen-xl mx-auto">
        <div className="md:flex md:flex-row  grid grid-cols-1 my-[100px] mx-5">
          {/* left container */}
          <div className=" grow">
            <h3 className="large-thin-heading">Billing Address</h3>
            {/* form for shipping and billing */}
            <div className="grid grid-cols-2 gap-8 mt-5">
              {/* first name */}
              <div>
                <p className=" text-xl font-['Quicksand']  ">First Name</p>
                <input
                  className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                  placeholder="Wick"
                  onChange={(event) => {
                    const value = event.target.value;
                  }}
                ></input>
              </div>
              {/* last name */}

              <div>
                <p className=" text-xl font-['Quicksand']  ">Last Name</p>
                <input
                  className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                  placeholder="Wick"
                  onChange={(event) => {
                    const value = event.target.value;
                  }}
                ></input>
              </div>
            </div>
            {/* email */}
            <div>
              <p className=" text-xl font-['Quicksand']  ">Email Address</p>
              <input
                className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                placeholder="John.Wick@gmail.com"
                onChange={(event) => {
                  const value = event.target.value;
                }}
              ></input>
            </div>
            {/* Address */}
            <div>
              <p className=" text-xl font-['Quicksand']  ">Address</p>
              <input
                className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                placeholder="Your Mailing Adress"
                onChange={(event) => {
                  const value = event.target.value;
                }}
              ></input>
            </div>
            {/* country state and zip */}
            <div className="grid grid-cols-3 gap-4">
              {/* country */}
              <div>
                <p className=" text-xl font-['Quicksand']  ">Country</p>
                <input
                  className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                  placeholder="United State"
                  onChange={(event) => {
                    const value = event.target.value;
                  }}
                ></input>
              </div>
              {/* state */}
              <div>
                <p className=" text-xl font-['Quicksand']  ">State</p>
                <input
                  className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                  placeholder="New York"
                  onChange={(event) => {
                    const value = event.target.value;
                  }}
                ></input>
              </div>
              {/* zip code */}
              <div>
                <p className=" text-xl font-['Quicksand']  ">Zip Code</p>
                <input
                  className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                  placeholder="12345"
                  onChange={(event) => {
                    const value = event.target.value;
                  }}
                ></input>
              </div>
            </div>
            {/* checkbox for shipping address */}
            <div className="">
              <input type="checkbox" />
              <span className="mx-2">
                Shipping address is the same as my billing address
              </span>
            </div>
            {/* checkbox saving the information */}
            <div className="">
              <input type="checkbox" className="" />
              <span className="mx-2">Save this information for next time</span>
            </div>
            <hr className="my-5" />
            <h3 className="large-thin-heading">Payment</h3>
            {/* radio option */}
            <p className="text-s">
              <input
                type="radio"
                checked={cardType === "Credit Card"}
                onChange={handleRadioEventChange}
                value={"Credit Card"}
                className="mr-3"
              />
              Credit Card
            </p>
            <p className="text-s">
              <input
                type="radio"
                checked={cardType === "Debit Card"}
                onChange={handleRadioEventChange}
                value="Debit Card"
                className="mr-3"
              />
              Debit Card
            </p>
            <p className="text-s">
              <input
                type="radio"
                checked={cardType === "Paypal"}
                onChange={handleRadioEventChange}
                value={"Paypal"}
                className="mr-3"
              />
              Paypal
            </p>
            {/* credit card info */}
            <div className="grid grid-cols-2 gap-10 mt-5">
              <div>
                <p className=" text-xl font-['Quicksand']  ">Name on Card</p>
                <input
                  className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                  placeholder="Full name as displayed on card"
                  onChange={(event) => {
                    const value = event.target.value;
                  }}
                ></input>
              </div>
              <div>
                <p className=" text-xl font-['Quicksand']  ">
                  Credit card number
                </p>
                <input
                  className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                  onChange={(event) => {
                    const value = event.target.value;
                  }}
                ></input>
              </div>
            </div>
            {/* Expiration date and CVV */}
            <div className="w-[50%] grid grid-cols-2 gap-8">
              {/* Expiration date */}
              <div>
                <p className=" text-xl font-['Quicksand']  ">Expiration</p>
                <input
                  className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                  onChange={(event) => {
                    const value = event.target.value;
                  }}
                ></input>
              </div>
              {/* CVV */}
              <div>
                <p className=" text-xl font-['Quicksand']  ">CVV</p>
                <input
                  className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                  onChange={(event) => {
                    const value = event.target.value;
                  }}
                ></input>
              </div>
            </div>
            <hr className="mb-5" />
            <div
              role="button"
              className=" p-5 rounded-md text-white opacity-90 hover:opacity-[1] w-full text-center bg-primary-color"
            >
              Check out
            </div>
          </div>

          {/* right container */}
          <div className="md:w-[300px] md:mt-0 mt-[50px] min-w-[300px] mx-5">
            <div className="flex flex-row justify-between mb-5">
              <h3 className="text-2xl">Your Cart</h3>
              <p className="p-2 px-4 text-center rounded-md bg-gray-500 text-white">
                {selectedCartItems.length}
              </p>
            </div>
            <div className="p-5 border-2 rounded-md ">
              {selectedCartItems.map((cartItem) => {
                return (
                  <CheckOutSideProductTile
                    {...cartItem}
                    productID={cartItem.productID}
                  />
                );
              })}
              {/* total price display */}
              <div className="flex flex-row-reverse">
                <p>Total Price: ${totalPrice}</p>
              </div>
              <div
                role="button"
                className="p-3 bg-primary-color text-white rounded-md text-center opacity-90 hover:opacity-[1] mt-5"
                onClick={() => {
                  handleIsCheckOut();
                  window.scrollTo(0, 0);
                }}
              >
                Go Back
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
