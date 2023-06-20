import React, { useState, useEffect } from "react";
import { CartInterF, cartProductInterF } from "../../Interface/CartInterface";
import ProductsAPIUtils from "../../utils/ProductsAPIUtils";

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartInterF[]>([]);

  useEffect(() => {
    ProductsAPIUtils.loadCartItems();
  });
  return (
    <>
      <div className="grid md:grid-cols-2">
        {/* left container */}
        <div className=""></div>
        {/* right container */}
        <div className=""></div>
      </div>
    </>
  );
};

export default CartPage;
