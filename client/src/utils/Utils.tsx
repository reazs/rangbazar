import {
  ContactFormErrorItnerF,
  ContactFormInterF,
} from "../Interface/ContactFormInterF";
import {
  CheckOutFormInterF,
  FormErrorsInterF,
} from "../Interface/FormInterface";
import BASE_URL from "../config/BaseURL";
import { emailRegex } from "./regexUtils";
export default class Utils {
  static delay = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  static loadUser = async () => {
    const tk = window.localStorage.getItem("token") as string;
    if (tk) {
      const url = BASE_URL + "/users/loadUser";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: tk,
        }),
      });

      const responseData = await response.json();
      const data = responseData.data;
      return data;
    }
  };

  static checkReviewSubmitted = async ({
    productID,
    userID,
  }: {
    productID: string;
    userID: string;
  }) => {
    const url = BASE_URL + "/product/review-exist";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productID: productID,
        userID: userID,
      }),
    });
    const responseData = await response.json();
    console.log(responseData);
  };

  static validateForm = (FormData: CheckOutFormInterF): FormErrorsInterF => {
    let errors: FormErrorsInterF = {};
    if (!FormData.fName) {
      errors.fName = "Name is Required";
    }
    if (!FormData.lName) {
      errors.lName = "Name is Required";
    }
    if (!FormData.email) {
      errors.email = "Email is Required";
    }
    if (FormData.email) {
      const isValidEmail = emailRegex.test(FormData.email);
      if (!isValidEmail) {
        errors.email = "Invalid Email";
      }
    }
    if (!FormData.address) {
      errors.address = "Address is Required";
    }
    if (!FormData.country) {
      errors.country = "Country is Required";
    }
    if (!FormData.state) {
      errors.state = "State is Required";
    }
    if (!FormData.zip) {
      errors.zip = "Zip Code is Required";
    }
    if (!FormData.CVV) {
      errors.CVV = "CVV is Required";
    }
    if (!FormData.creditCardName) {
      errors.creditCardName = "Credit Card Name is Required";
    }
    if (!FormData.creditCardNumber) {
      errors.creditCardNumber = "Credit Card Number is Required";
    }
    if (!FormData.expiration) {
      errors.expiration = "Expiration is Required";
    }
    if (!FormData.nameOnCard) {
      errors.nameOnCard = "Name On Card is Required";
    }

    return errors;
  };

  static contactFormValidate = (
    FormData: ContactFormInterF
  ): ContactFormErrorItnerF => {
    let error: ContactFormErrorItnerF = {};
    if (!FormData.name) {
      error.name = "Required name.";
    }
    if (FormData.email) {
      const isValidEmail = emailRegex.test(FormData.email);
      if (!isValidEmail) {
        error.email = "Invalid Email";
      }
    }
    if (!FormData.email) {
      error.email = "Required email address.";
    }
    if (!FormData.request) {
      error.request = "Required type of request.";
    }
    if (!FormData.message) {
      error.message = "Required message";
    }
    return error;
  };
}
