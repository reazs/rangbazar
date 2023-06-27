import {
  CartInterF,
  cartProductInterF,
  selectedCartItemInterF,
} from "../Interface/CartInterface";
import { CheckOutFormInterF } from "../Interface/FormInterface";
import { ClothingProductInterF } from "../Interface/Product";
import BASE_URL from "../config/BaseURL";
import { Product } from "../models/Products";

class ProductsAPIUtils {
  static addReview = async ({ formData }: { formData: FormData }) => {
    try {
      const url = BASE_URL + "/product/add-review";
      const response = await fetch(url, { method: "POST", body: formData });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error({ message: "count bot fetch url", error: error });
    }
  };
  static loadProducts = async (
    handleSetProduct: (data: ClothingProductInterF[]) => void
  ) => {
    try {
      const url = BASE_URL + "/products";
      const response = await fetch(url);
      const responseData: ClothingProductInterF[] = await response.json();
      handleSetProduct(responseData);
    } catch (error) {
      console.error({ message: "could not fetch url", error: error });
    }
  };

  static loadCartItems = async (userID: string) => {
    try {
      const url = BASE_URL + "/carts/user-cart";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: userID,
        }),
      });
      const responseData: CartInterF = await response.json();
      return responseData;
    } catch (error) {
      console.error(error);
    }
  };

  static loadProduct = async (productID: string) => {
    try {
      const url = BASE_URL + "/product?id=" + productID;
      const response = await fetch(url);
      const responseData: ClothingProductInterF = await response.json();
      return responseData;
    } catch (error) {
      console.error(error);
    }
  };
  static addProductToCart = async (
    product: ClothingProductInterF,
    size: string | undefined,
    color: string | undefined,
    quantity: number | undefined,
    userId: string
  ) => {
    try {
      const prodcutID = product._id;
      const stocks = product.stocks;
      const price = product.price;
      const data = {
        productID: prodcutID,
        price: price,
        stocks: stocks,
        size: size,
        color: color,
        quantity: quantity,
        userID: userId,
      };
      console.log(userId, "userID");
      const url = BASE_URL + "/carts/add-product";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        console.log("failed to fetch api");
      }
    } catch (error) {
      console.error(error);
    }
  };
  static removeProductFromCart = async (userID: string, productID: string) => {
    try {
      const url = BASE_URL + "/carts/remove-product";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userID: userID,
          productID: productID,
        }),
      });
      if (response.status == 200) {
        const responseData = await response.json();
        return responseData;
      }
    } catch (error) {
      console.error(error);
    }
  };

  static makeOrderProduct = async (
    orderData: CheckOutFormInterF,
    selectedProducts: selectedCartItemInterF[]
  ) => {
    try {
      const url = BASE_URL + "/orders/order";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...orderData,
          products: selectedProducts,
        }),
      });
      if (response.status == 200) {
        const responseData = await response.json();
        console.log(responseData);
        console.log("the formdata for order passing successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export default ProductsAPIUtils;
