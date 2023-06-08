import { useRef, useEffect, useState } from "react";
import { SlideTransition } from "../../../components/SlideTransition";
import Lottie from "lottie-react";
import checkDoneData from "../../../../public/chekc-done.json";
import UtilLoadRive from "../../../utils/UtilLoadRive";
import Utils from "../../../utils/ScreenTimeUtils";
import { useRive } from "rive-react";
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
}: {
  isVisaible: boolean;
  handleClose: () => void;
  handleFormOnSubmit: (review: Review) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedStar, setSelectedStar] = useState(5);
  const [isComplete, setIsComplete] = useState(false);
  function handleHoverOutSide(event: MouseEvent) {
    if (!containerRef.current?.contains(event.target as Node)) {
      handleClose();
    }
  }
  function handleHoverOnStar() {
    const stars = document.querySelectorAll(".star");

    stars.forEach((star) => {
      star.addEventListener("mouseover", () => {
        const selectedValue: string | null = star.getAttribute("data-value");
        stars.forEach((star) => {
          const starValue: string | null = star.getAttribute("data-value");
          if (starValue && selectedValue) {
            if (parseInt(starValue) <= parseInt(selectedValue)) {
              star.classList.add("star-hovered");
              setSelectedStar(parseInt(starValue));
            } else {
              star.classList.remove("star-hovered");
            }
          }
        });
      });
    });
  }

  function Stars() {
    const starCount = 5; // Number of stars to render

    const renderStars = () => {
      const stars = [];

      for (let i = 1; i <= starCount; i++) {
        stars.push(
          <i
            data-value={i}
            id={i.toString()}
            onClick={() => {
              setSelectedStar(i);
            }}
            className={`fa-solid fa-star star ${
              i <= selectedStar ? "star-hovered" : ""
            } cursor-pointer text-2xl
            }`}
          ></i>
        );
      }

      return stars;
    };

    return <div className="stars-container">{renderStars()}</div>;
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleHoverOutSide);
    document.addEventListener("mouseover", handleHoverOnStar);
    if (isComplete) {
      Utils.delay(3500).then(() => {
        handleClose();
      });
    }
    return () => {
      document.removeEventListener("mousedown", handleHoverOutSide);
      document.removeEventListener("mouseover", handleHoverOnStar);
    };
  }, [handleClose]);
  return isVisaible ? (
    <>
      <div className="fixed inset-0 bg-black backdrop:blur-sm bg-opacity-30 flex justify-center items-center z-10">
        <SlideTransition>
          <div
            ref={containerRef}
            className=" md:mx-0 mx-2 max-w-[600px] bg-white shadow-md rounded-md p-10 "
          >
            {isComplete ? (
              <>
                <div className="h-[250px] w-[250px] md:h-[400px] md:w-[400px]">
                  <UtilLoadRive
                    src="../../../../public/riveAssets/confetti.riv"
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
                  {<RatingAnimatedStar />}
                </div>
                <h3 className="review-form-label">Title</h3>
                <input
                  id="title"
                  placeholder="Optional"
                  className="w-full mb-2 h-10 focus:outline-none  border-2 border-primary-color p-5 rounded-md"
                ></input>
                <h3 className="review-form-label">Comment</h3>
                <textarea
                  id="comment"
                  placeholder="write your comment here!"
                  className="w-full mb-2 h-[100px] rounded-md p-5 focus:outline-none border-2 border-primary-color"
                ></textarea>

                <div className="flex flex-row-reverse">
                  <button
                    type="submit"
                    onClick={(event) => {
                      event.preventDefault();
                      const title: HTMLInputElement | null =
                        document.getElementById("title") as HTMLInputElement;
                      const comment: HTMLTextAreaElement | null =
                        document.getElementById(
                          "comment"
                        ) as HTMLTextAreaElement;

                      const review: Review = {
                        title: title.value,
                        comment: comment.value,
                        rating: selectedStar,
                        email: "reaz@gmail.com",
                        userId: 1,
                        username: "gooseFather",
                      };
                      setIsComplete(true);
                      handleFormOnSubmit(review);
                    }}
                    className="px-10 ml-2 py-2 border-2 rounded-md bg-primary-color text-white hover:bg-white hover:text-primary-color"
                  >
                    Submit
                  </button>
                  <button
                    onClick={handleClose}
                    className="px-10 py-2 border-2  border-red-300 rounded-md text-red-400 hover:bg-red-400 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </SlideTransition>
      </div>
    </>
  ) : null;
};
export default ProudctReviewForm;

const RatingAnimatedStar = () => {
  const { rive, RiveComponent } = useRive({
    src: "../../../../public/riveAssets/rating-stars.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    onStateChange: (e) => {
      const data: [] = e.data as [];
      const status = data.toString();
      console.log(status);
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
