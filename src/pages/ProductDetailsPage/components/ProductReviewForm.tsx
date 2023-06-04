import { useRef, useEffect } from "react";
import { Reveal } from "../../../components/Reveal";
import { SlideTransition } from "../../../components/SlideTransition";
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
  function handleHoverOutSide(event: MouseEvent) {
    if (!containerRef.current?.contains(event.target as Node)) {
      handleClose();
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleHoverOutSide);
    return () => {
      removeEventListener("mousedown", handleHoverOutSide);
    };
  }, [handleClose]);
  return isVisaible ? (
    <>
      <div className="fixed inset-0 bg-black backdrop:blur-sm bg-opacity-30 flex justify-center items-center z-10">
        <SlideTransition>
          <div
            ref={containerRef}
            className=" w-[600px] bg-white shadow-md rounded-md p-10"
          >
            <form>
              <h3 className="text-4xl mb-2 josefin-sans">
                Share Your Thoughts
              </h3>

              <h3 className="review-form-label">Rating Proudct</h3>
              <select id="rating" className="h-10 w-full " name="rating">
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
              </select>
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
                  onClick={(event) => {
                    event.preventDefault();
                    const title: HTMLInputElement | null =
                      document.getElementById("title") as HTMLInputElement;
                    const comment: HTMLTextAreaElement | null =
                      document.getElementById("comment") as HTMLTextAreaElement;
                    const rating: HTMLSelectElement | null =
                      document.getElementById("rating") as HTMLSelectElement;

                    const review: Review = {
                      title: title.value,
                      comment: comment.value,
                      rating: parseInt(rating.value),
                      email: "reaz@gmail.com",
                      userId: 1,
                      username: "gooseFather",
                    };
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
          </div>
        </SlideTransition>
      </div>
    </>
  ) : null;
};
export default ProudctReviewForm;
