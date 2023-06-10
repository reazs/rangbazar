import React from "react";

interface Props {
  imgURL: string;
  title: string;
  price: string | number;
  rating: string;
}

const ProductCard = ({ imgURL, title, price, rating }: Props) => {
  return (
    <>
      <div className=" h-[475px]    m-2 ">
        <div className="h-[80%]  ">
          <img className="h-[100%] w-full object-cover" src={imgURL} />
        </div>
        <div className="h-[20%] w-full py-4 uppercase">
          <h5 className="">{title}</h5>
          <div className="flex flex-row justify-between">
            <p>€{price}</p>
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
