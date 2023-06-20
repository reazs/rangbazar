import { useRef, useEffect, useState, ChangeEvent } from "react";
import { SlideTransition } from "../../../components/SlideTransition";
import Lottie from "lottie-react";
import checkDoneData from "../../../../public/chekc-done.json";
import UtilLoadRive from "../../../utils/UtilLoadRive";
import Utils from "../../../utils/Utils";
import { useRive } from "rive-react";
import FileUtils from "../../../utils/FileUtils";
import products from "../../../models/Products";
import ProductsAPIUtils from "../../../utils/ProductsAPIUtils";
import BASE_URL from "../../../config/BaseURL";
import { error } from "console";
import { UserInterF } from "../../../Interface/UserInterface";
interface Review {
  title: string;
  comment: string;
  rating: number;
  email: string;
  userId: number | string;
  username: string;
}
const ProudctReviewForm = ({
  isVisaible,
  handleClose,
  handleFormOnSubmit,
  productID,
  user,
  isReviewExist,
}: {
  isVisaible: boolean;
  productID: string;
  user: UserInterF;
  isReviewExist: Boolean;
  handleClose: () => void;
  handleFormOnSubmit: (review: Review) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isComplete, setIsComplete] = useState(false);
  const [selectedReviewImage, setSelectedReviewImage] = useState<File[]>([]);
  const [ratingValue, setRatingValue] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const handleFileChanges = (event: ChangeEvent<HTMLInputElement>) => {
    function handleCallback(images: string[], file: File) {
      setSelectedReviewImage((prevImage: File[]) => {
        return [file, ...prevImage];
      });
    }
    FileUtils.getLoadedImages(event, handleCallback);
  };
  const handleRatingValue = (value: number) => {
    setRatingValue(value);
  };
   const handleClickOutside = (event: MouseEvent) => {
     if (
       containerRef.current &&
       !containerRef.current.contains(event.target as Node)
     ) {
       handleClose();
     }
   };

  useEffect(() => {
    
    if (isComplete) {
      Utils.delay(3500).then(() => {
        handleClose();
      });
    }
    return () => {};
  }, [handleClose]);
  return isVisaible ? (
    <>
      <div className="fixed inset-0 bg-black backdrop:blur-sm bg-opacity-30 flex justify-center items-center z-10">
        {isReviewExist ? (
          <div className="bg-white flex flex-row items-center justify-center p-10 rounded-md max-w-[500px] mx-5">
            <div>
              <p className="mb-4 text-xl font-['Quicksand']">
                We appreciate your review submission! Thank you for taking the
                time to share your feedback.
              </p>
              <div className=" flex flex-row-reverse">
                <button
                  type="reset"
                  onClick={() => {
                    setTitle("");
                    setComment("");
                    setSelectedReviewImage([]);
                    setRatingValue(0);
                    handleClose();
                  }}
                  className="px-10 py-2 border-2  border-red-300 rounded-md text-red-400 hover:bg-red-400 hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <SlideTransition>
            <div
              ref={containerRef}
              className=" md:mx-0 mx-2 max-w-[600px] bg-white shadow-md rounded-md p-10 "
            >
              {isComplete ? (
                <>
                  <div className="h-[250px] w-[250px] md:h-[400px] md:w-[400px]">
                    <UtilLoadRive
                      src="/riveAssets/confetti.riv"
                      stateMachineName="Explosion"
                      autoplay={true}
                    />
                  </div>
                </>
              ) : (
                <form>
                  <h3 className="text-4xl mb-2 josefin-sans">
                    Share Your Thoughts
                  </h3>

                  <h3 className="review-form-label">Rating Proudct</h3>
                  <div className="mb-2 h-[65px] w-[220px] cursor-pointer">
                    <RatingAnimatedStar handleRatingValue={handleRatingValue} />
                  </div>
                  <h3 className="review-form-label">Title</h3>
                  <input
                    id="title"
                    value={title}
                    onChange={(e) => {
                      const value = e.target.value;
                      setTitle(value);
                    }}
                    placeholder="Optional"
                    className="w-full mb-2 h-10 focus:outline-none  border-2 border-primary-color p-5 rounded-md"
                  ></input>
                  <h3 className="review-form-label">Comment</h3>
                  <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => {
                      const value = e.target.value;
                      setComment(value);
                    }}
                    placeholder="write your comment here!"
                    className="w-full mb-2 h-[100px] rounded-md p-5 focus:outline-none border-2 border-primary-color"
                  ></textarea>
                  <input
                    className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                    type="file"
                    id="formFile"
                    onChange={handleFileChanges}
                  />
                  {selectedReviewImage && (
                    <div className="text-s py-1 text-gray-400">
                      Files selected: {selectedReviewImage.length}
                    </div>
                  )}
                  <div className="flex flex-row-reverse">
                    <button
                      type="submit"
                      onClick={(event) => {
                        event.preventDefault();

                        const review: Review = {
                          title: title,
                          comment: comment,
                          rating: ratingValue,
                          email: "reaz@gmail.com",
                          userId: 1,
                          username: "gooseFather",
                        };
                        const formData = new FormData();
                        selectedReviewImage.forEach((imgFile) => {
                          formData.append("reviewImages", imgFile);
                        });
                        formData.append("productID", productID);
                        formData.append("rating", ratingValue.toString());
                        formData.append("title", title);
                        formData.append("comment", comment);
                        const userId: string = user?._id as string;
                        formData.append("userID", userId);

                        const url = BASE_URL + "/product/add-review";
                        fetch(url, {
                          method: "POST",
                          body: formData,
                        })
                          .then((response) =>
                            response
                              .json()
                              .then((data: { message: string }) => {
                                if (
                                  data.message == "Already Sumbitted Review"
                                ) {
                                  setIsComplete(false);
                                  console.log(data);
                                } else {
                                  setIsComplete(false);
                                }
                              })
                          )
                          .catch((error) => console.log(error));

                        setIsComplete(true);
                        handleFormOnSubmit(review);
                      }}
                      className="px-10 ml-2 py-2 border-2 rounded-md bg-primary-color text-white hover:bg-white hover:text-primary-color"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      onClick={() => {
                        setTitle("");
                        setComment("");
                        setSelectedReviewImage([]);
                        setRatingValue(0);
                        handleClose();
                      }}
                      className="px-10 py-2 border-2  border-red-300 rounded-md text-red-400 hover:bg-red-400 hover:text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </SlideTransition>
        )}
      </div>
    </>
  ) : null;
};
export default ProudctReviewForm;

const RatingAnimatedStar = ({
  handleRatingValue,
}: {
  handleRatingValue: (ratingValue: number) => void;
}) => {
  const { rive, RiveComponent } = useRive({
    src: "/riveAssets/rating-orange-star.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    onStateChange: (e) => {
      const data: [] = e.data as [];
      const status: string = data.toString();
      if (status.includes("1")) {
        handleRatingValue(1);
      } else if (status.includes("2")) {
        handleRatingValue(2);
      } else if (status.includes("3")) {
        handleRatingValue(3);
      } else if (status.includes("4")) {
        handleRatingValue(4);
      } else if (status.includes("5")) {
        handleRatingValue(5);
      }
    },
  });
  return (
    <>
      <div className="h-full w-full">
        <RiveComponent />
      </div>
    </>
  );
};
