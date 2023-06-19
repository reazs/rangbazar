import React from "react";
import { ClothingProductInterF } from "../Interface/Product";
import BASE_URL from "../config/BaseURL";
import { Link } from "react-router-dom";
const ProductCard = ({ name, price, images, _id }: ClothingProductInterF) => {
  const imgURL = images[0];
  return (
    <>
      <a href={"/shop/product-details/" + name + "/" + _id}>
        <div className=" h-[475px]    m-2 ">
          <div className="h-[80%]  ">
            <img className="h-[100%] w-full object-cover" src={imgURL} />
          </div>
          <div className="h-[20%] w-full py-4 uppercase">
            <h5 className="">{name}</h5>
            <div className="flex flex-row justify-between">
              <p>€{price}</p>
              {/* <p>{rating}</p> */}
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default ProductCard;
