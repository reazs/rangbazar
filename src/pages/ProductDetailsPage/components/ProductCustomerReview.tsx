import { useState } from "react";
import { Product } from "../../../models/Products";
import ProudctReviewForm from "./ProductReviewForm";
interface ReviewStarsInfo {
  star: string;
  percentage: string | number;
  totalReview: number;
}
const ProductCustomerReview = ({
  product,
}: {
  product: Product | undefined;
}) => {
  const [isVisiable, setIsVisiable] = useState(false);
  const productReviewStars: ReviewStarsInfo[] = [
    {
      star: "⭐⭐⭐⭐⭐",
      percentage: "53",
      totalReview: 8,
    },
    {
      star: "⭐⭐⭐⭐",
      percentage: "6.66",
      totalReview: 1,
    },
    {
      star: "⭐⭐⭐",
      percentage: "0",
      totalReview: 0,
    },
    {
      star: "⭐⭐",
      percentage: "26.66",
      totalReview: 4,
    },
    {
      star: "⭐",
      percentage: "13.3",
      totalReview: 2,
    },
  ];
  function handleReviewFormOnSubmit(review: {}) {
    console.log(review);
  }
  function handleClose() {
    setIsVisiable(false);
  }
  return (
    <>
      <div className="mb-[45px] mr-[35px]">
        <p className="medium-thin-heading py-[15px]">Review</p>
        <div className="grid md:grid-cols-2 grid-cols-1 mb-6">
          {/* left container */}
          <div className="md:flex md:flex-row flex-col">
            {/* left side */}
            <div className="m-3">
              <p>{product?.rating}</p>
              <p>Based on 15 Reviews</p>
            </div>
            {/* right side */}
            <div className="">
              {/* 5 star */}
              {productReviewStars.map((productReview, index) => {
                return (
                  <>
                    <ProductReviewStars
                      key={index}
                      star={productReview.star}
                      percentage={productReview.percentage as string}
                      totalReview={productReview.totalReview}
                    />
                  </>
                );
              })}
            </div>
            {/* left side */}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <button
            onClick={() => {
              setIsVisiable(!isVisiable);
            }}
            className={
              "mb-6 text-xl py-3 max-w-[300px] text-center border-2 hover:bg-primary-color hover:text-white"
            }
          >
            Write Review
            {<i className="fa-solid fa-plus text-xl text-center pl-2 "></i>}
          </button>
        </div>
        <ProudctReviewForm
          handleClose={handleClose}
          handleFormOnSubmit={handleReviewFormOnSubmit}
          isVisaible={isVisiable}
        />
      </div>
    </>
  );
};

const ProductReviewStars = ({
  star,
  percentage,
  totalReview,
}: {
  star: string;
  percentage: string;
  totalReview: number;
}) => {
  return (
    <>
      <div className="flex flex-row m-3">
        {/* review percentage */}
        <div className="md:w-[200px]  max-w-[300px] min-w-[130px]  mr-2 border-2">
          <div
            style={{
              width: percentage + "%",
            }}
            className={`h-full bg-primary-color`}
          ></div>
        </div>
        {/* display star */}
        <span className="mr-2 min-w-[65px]">
          {Math.round(parseInt(percentage))}% ({totalReview})
        </span>
        <span className="w-[110px]">{star}</span>
      </div>
    </>
  );
};
export default ProductCustomerReview;
