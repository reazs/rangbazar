import { CartInterF } from "../Interface/CartInterface";
import { ClothingProductInterF } from "../Interface/Product";
import BASE_URL from "../config/BaseURL";

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

  static loadCartItems = async () => {
    try {
      const url = BASE_URL + "/carts";
      const response = await fetch(url);
      const responseData: CartInterF[] = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };
}

export default ProductsAPIUtils;
