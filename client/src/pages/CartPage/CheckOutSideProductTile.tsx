import { selectedCartItemInterF } from "../../Interface/CartInterface";
import { useEffect, useState } from "react";
import ProductsAPIUtils from "../../utils/ProductsAPIUtils";
const CheckOutSideProductTile = (product: selectedCartItemInterF) => {
  const [productName, setProductName] = useState<string>();
  const loadProduct = () => {
    ProductsAPIUtils.loadProduct(product.productID).then((data) => {
      setProductName(data?.name as string);
    });
  };
  useEffect(() => {
    loadProduct();
  });
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <h4 className=" font-medium overflow-clip">
          {productName ? productName : "Item One"}
        </h4>
        <p>${product.price}</p>
      </div>
      <p>Quantity: {product.quantity}</p>
      <hr className="my-5" />
    </div>
  );
};

export default CheckOutSideProductTile;
