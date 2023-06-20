import { useState, useEffect } from "react";
import { Product } from "../../../models/Products";
import ProudctReviewForm from "./ProductReviewForm";
import Utils from "../../../utils/Utils";
import { ClothingProductInterF } from "../../../Interface/Product";
import { UserInterF } from "../../../Interface/UserInterface";
import BASE_URL from "../../../config/BaseURL";
interface ReviewStarsInfo {
  star: any;
  percentage: string | number;
  totalReview: number;
}
const ProductCustomerReview = ({
  product,
  user,
}: {
  user: UserInterF;
  product: ClothingProductInterF | undefined;
}) => {
  const [isReviewExist, setIsReviewExist] = useState<Boolean>();
  const doSomething = async (prodcutID: string) => {
    const userID = user?._id;

    const url = BASE_URL + "/product/review-exist";

    const data = { productID: prodcutID, userID: userID };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) =>
        response.json().then((data) => {
          setIsReviewExist(data.isSumbitReview as Boolean);
        })
      )
      .catch((error) => console.error(error));
  };

  const [isVisiable, setIsVisiable] = useState(false);
  const productReviewStars: ReviewStarsInfo[] = [
    {
      star: Stars(5),
      percentage: "53.33",
      totalReview: 4,
    },
    {
      star: Stars(4),
      percentage: "26.6",
      totalReview: 4,
    },
    {
      star: Stars(3),
      percentage: "0",
      totalReview: 0,
    },
    {
      star: Stars(2),
      percentage: "6.667",
      totalReview: 1,
    },

    {
      star: Stars(1),
      percentage: "13.3",
      totalReview: 2,
    },
  ];
  function Stars(starCount: number) {
    const totalStar = 5;
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= totalStar; i++) {
        stars.push(
          <i
            style={{ color: i <= starCount ? "#F79327" : "" }}
            className="fa-solid fa-star text-xl"
          ></i>
        );
      }
      return stars;
    };

    return renderStars();
  }

  function handleReviewFormOnSubmit(review: {}) {
    console.log(review);
    Utils.delay(2000).then(() => {
      handleClose();
    });
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
              <p>{Stars(5)}</p>
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
              const pID = product?._id;
              if (pID) {
                doSomething(pID);
              }
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
          user={user as UserInterF}
          isReviewExist={isReviewExist as Boolean}
          productID={product?._id as string}
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
  star: any;
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
        <span className=" flex flex-row">{star}</span>
      </div>
    </>
  );
};
export default ProductCustomerReview;
