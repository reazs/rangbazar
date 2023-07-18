import React, { ChangeEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CartInterF,
  selectedCartItemInterF,
} from "../../Interface/CartInterface";
import CheckOutSideProductTile from "./CheckOutSideProductTile";
import {
  CheckOutFormInterF,
  FormErrorsInterF,
} from "../../Interface/FormInterface";
import Utils from "../../utils/Utils";
import ProductsAPIUtils from "../../utils/ProductsAPIUtils";
import { UserInterF } from "../../Interface/UserInterface";
import ColorLoading from "../../components/ColorLoading";

const CheckOutPage = ({
  selectedCartItems,
  totalPrice,
  handleIsCheckOut,
  handleUpdateCartItems,
}: {
  selectedCartItems: selectedCartItemInterF[];
  totalPrice: number;
  handleIsCheckOut: () => void;
  handleUpdateCartItems: (selectedCartItems: selectedCartItemInterF[]) => void;
}) => {
  const [isSameShipping, setIsSameShipping] = useState<boolean>(false);
  const [cardType, setCardType] = useState<string>("");
  const [formErros, setFormErros] = useState<FormErrorsInterF>({});
  const [user, setUser] = useState<UserInterF>();
  const [isFormSubmit, setIsFormSubmit] = useState<boolean>(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CheckOutFormInterF>({
    fName: "",
    lName: "",
    email: "",
    address: "",
    country: "",
    state: "",
    zip: 0,
    isShippingSame: false,
    saveInfo: false,
    creditCardName: "",
    nameOnCard: "",
    creditCardNumber: 0,
    expiration: "",
    CVV: "",
  });
  const handleRadioEventChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    handleChange(event);
    setCardType(value);
  };
  const loadUser = () => {
    Utils.loadUser().then((userData) => setUser(userData));
  };
  useEffect(() => {
    loadUser();
  }, [user]);
  const handleOnSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const erros = Utils.validateForm(formData);
    if (Object.keys(erros).length == 0) {
      //  form is valid go to next steop
      ProductsAPIUtils.makeOrderProduct(
        formData,
        selectedCartItems,
        totalPrice,
        user?._id as string
      );
      // TODO update selectedItemsCard here
      handleUpdateCartItems(selectedCartItems);
      setIsFormSubmit(true);
      Utils.delay(1500).then(() => {
        setIsFormSubmit(false);
        navigate("/user/view-orders");
      });
      console.log("form submiited");
    } else {
      setFormErros(erros);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData: any) => {
      let newData: CheckOutFormInterF = {
        ...prevFormData,
        [name]: value,
      };
      if (name === "isShippingSame") {
        setIsSameShipping((preVal) => !preVal);
      }
      newData.isShippingSame = isSameShipping;
      return newData;
    });

    console.log(formData);
  };
  return (
    <>
      <div className=" max-w-screen-xl mx-auto">
        <div className="md:flex md:flex-row  grid grid-cols-1 my-[100px] mx-5">
          {/* left container */}
          <form onSubmit={handleOnSubmitForm}>
            <div className=" grow">
              <h3 className="large-thin-heading">Billing Address</h3>
              {/* form for shipping and billing */}
              <div className="grid grid-cols-2 gap-8 mt-5">
                {/* first name */}
                <div>
                  <p className=" text-xl font-['Quicksand']  ">First Name</p>
                  {formErros.fName && (
                    <span className="text-red-400">{formErros.fName}</span>
                  )}
                  <input
                    name="fName"
                    className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                    placeholder="Wick"
                    onChange={handleChange}
                  ></input>
                </div>
                {/* last name */}

                <div>
                  <p className=" text-xl font-['Quicksand']  ">Last Name</p>
                  {formErros.lName && (
                    <span className="text-red-400">{formErros.lName}</span>
                  )}
                  <input
                    name="lName"
                    className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                    placeholder="Wick"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              {/* email */}
              <div>
                <p className=" text-xl font-['Quicksand']  ">Email Address</p>
                {formErros.email && (
                  <span className="text-red-400">{formErros.email}</span>
                )}
                <input
                  name="email"
                  className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                  placeholder="John.Wick@gmail.com"
                  onChange={handleChange}
                ></input>
              </div>
              {/* Address */}
              <div>
                <p className=" text-xl font-['Quicksand']  ">Address</p>
                {formErros.address && (
                  <span className="text-red-400">{formErros.address}</span>
                )}
                <input
                  name="address"
                  className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                  placeholder="Your Mailing Adress"
                  onChange={handleChange}
                ></input>
              </div>
              {/* country state and zip */}
              <div className="grid grid-cols-3 gap-4">
                {/* country */}
                <div>
                  <p className=" text-xl font-['Quicksand']  ">Country</p>
                  {formErros.country && (
                    <span className="text-red-400">{formErros.country}</span>
                  )}
                  <input
                    name="country"
                    className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                    placeholder="United State"
                    onChange={handleChange}
                  ></input>
                </div>
                {/* state */}
                <div>
                  <p className=" text-xl font-['Quicksand']  ">State</p>
                  {formErros.state && (
                    <span className="text-red-400">{formErros.state}</span>
                  )}
                  <input
                    name="state"
                    className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                    placeholder="New York"
                    onChange={handleChange}
                  ></input>
                </div>
                {/* zip code */}
                <div>
                  <p className=" text-xl font-['Quicksand']  ">Zip Code</p>
                  {formErros.zip && (
                    <span className="text-red-400">{formErros.zip}</span>
                  )}
                  <input
                    name="zip"
                    className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                    placeholder="12345"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              {/* checkbox for shipping address */}
              <div className="">
                <input
                  name="isShippingSame"
                  onChange={handleChange}
                  type="checkbox"
                />
                <span className="mx-2">
                  Shipping address is the same as my billing address
                </span>
              </div>
              {/* checkbox saving the information */}
              <div className="">
                <input
                  name="saveInfo"
                  onChange={handleChange}
                  type="checkbox"
                  className=""
                />
                <span className="mx-2">
                  Save this information for next time
                </span>
              </div>
              <hr className="my-5" />
              <h3 className="large-thin-heading">Payment</h3>
              {/* radio option */}
              {formErros.creditCardName && (
                <span className="text-red-400">{formErros.creditCardName}</span>
              )}
              <p className="text-s">
                <input
                  name="creditCardName"
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
                  name="creditCardName"
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
                  name="creditCardName"
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
                  {formErros.nameOnCard && (
                    <span className="text-red-400">{formErros.nameOnCard}</span>
                  )}
                  <input
                    name="nameOnCard"
                    className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                    placeholder="Full name as displayed on card"
                    onChange={handleChange}
                  ></input>
                </div>
                <div>
                  <p className=" text-xl font-['Quicksand']  ">
                    Credit card number
                  </p>
                  {formErros.creditCardNumber && (
                    <span className="text-red-400">
                      {formErros.creditCardNumber}
                    </span>
                  )}
                  <input
                    name="creditCardNumber"
                    className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              {/* Expiration date and CVV */}
              <div className="w-[50%] grid grid-cols-2 gap-8">
                {/* Expiration date */}
                <div>
                  <p className=" text-xl font-['Quicksand']  ">Expiration</p>
                  {formErros.expiration && (
                    <span className="text-red-400">{formErros.expiration}</span>
                  )}
                  <input
                    name="expiration"
                    className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                    onChange={handleChange}
                  ></input>
                </div>
                {/* CVV */}
                <div>
                  <p className=" text-xl font-['Quicksand']  ">CVV</p>
                  {formErros.CVV && (
                    <span className="text-red-400">{formErros.CVV}</span>
                  )}
                  <input
                    name="CVV"
                    className="mb-6   h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <hr className="mb-5" />
              <button
                type="submit"
                onClick={handleOnSubmitForm}
                className=" p-5 rounded-md text-white opacity-90 hover:opacity-[1] w-full text-center bg-primary-color"
              >
                Check out
              </button>
            </div>
          </form>
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

      {isFormSubmit && (
        <div className="fixed inset-0 bg-black backdrop:blur-sm bg-opacity-30 flex justify-center items-center z-10">
          <div className="flex flex-row items-center justify-center p-10 rounded-md  mx-5">
            <ColorLoading />
          </div>
        </div>
      )}
    </>
  );
};

export default CheckOutPage;
