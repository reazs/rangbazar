import {
  productCategories,
  colors,
  ageCategories,
} from "../../models/Products";
import { useState, ChangeEvent } from "react";
import { SelectedColorInterf } from "./UploadProductPage";
interface uploadProductInter {
  name: string | undefined;
  price: number | undefined;
  stocks: number | undefined;
  description: string | undefined;
}
interface UploadProductFormInterf {
  handleUpdatingColors: (color: string, name: string) => void;
  productColors: SelectedColorInterf[];
  handleSelectedProductCategory: (id: string) => void;
  handleSelectedAgeCateogry: (id: string) => void;
  handleUploadProduct: (data: uploadProductInter) => void;
}
const UploadProductForm = ({
  handleUpdatingColors,
  productColors,
  handleSelectedAgeCateogry,
  handleSelectedProductCategory: handleSelectedProductCategory,
  handleUploadProduct,
}: UploadProductFormInterf) => {
  const [title, setTitle] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [quantity, setQuantity] = useState<number>();
  const [description, setDescription] = useState<string>();

  return (
    <>
      <div className="flex flex-row justify-center items-center w-full">
        <div className="w-full">
          {/* <-------------------- Title ------------------------> */}
          <p className=" text-xl font-['Quicksand']  ">Name</p>
          <input
            className="mb-6  h-10 text-center w-[100%] px-2 border-b-2  focus:outline-none focus:border-b-2 focus:border-b-primary-color"
            placeholder="Enter Product Name"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const value = event.target.value;
              setTitle(value);
            }}
          />
          {/* <-------------------- Price ------------------------> */}
          <p className=" text-xl font-['Quicksand']  ">Price</p>
          <input
            className="mb-6  h-10 text-center w-[100%] px-2 border-b-2  focus:outline-none focus:border-b-2 focus:border-b-primary-color"
            placeholder="Enter Product Price"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const value = parseFloat(event.target.value);
              setPrice(value);
            }}
          />
          {/* <-------------------- Quantity ------------------------> */}
          <p className=" text-xl font-['Quicksand']  ">Quantity</p>
          <input
            type="number"
            className="mb-6  h-10 text-center w-[100%] px-2 border-b-2  focus:outline-none focus:border-b-2 focus:border-b-primary-color"
            placeholder="Enter Total Product in Stocks"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const value = event.target.value;
              setQuantity(parseInt(value));
            }}
          />
          {/* <-------------------- Clothing Cateogry ------------------------> */}
          <p className=" text-xl font-['Quicksand']  ">Product Cateogry</p>
          <div
            className="md:grid sm:grid  sm:grid-cols-3 flex flex-row overflow-x-auto   mb-5 px-2 pb-2 my-5"
            style={{ whiteSpace: "nowrap" }}
          >
            {productCategories.map((category, index) => {
              return (
                <div
                  className="border-2  text-center  rounded-md p-2 mr-2 mb-1 cursor-pointer "
                  key={category + index}
                  onClick={() => {
                    handleSelectedProductCategory(category);
                  }}
                  id={category}
                >
                  <p className="text-sm">{category}</p>
                </div>
              );
            })}
          </div>
          {/* <-------------------- Age Cateogry ------------------------> */}
          <p className=" text-xl font-['Quicksand']  "> Age Cateogry</p>
          <div
            className="grid  grid-cols-4   mb-5 px-2 pb-2 my-5"
            style={{ whiteSpace: "nowrap" }}
          >
            {ageCategories.map((ageCategory, index) => {
              return (
                <div
                  className="border-2  text-center  rounded-md p-2 mr-2 mb-1 cursor-pointer "
                  key={ageCategory + index}
                  onClick={() => {
                    handleSelectedAgeCateogry(ageCategory);
                  }}
                  id={ageCategory}
                >
                  <p className="text-sm">{ageCategory}</p>
                </div>
              );
            })}
          </div>
          {/* <-------------------- Varients color ------------------------> */}
          <p className=" text-xl font-['Quicksand']  "> Colors</p>
          <div className="p-4 md:grid sm:grid md:grid-cols-9 sm:grid-cols-7 flex flex-row overflow-x-auto border rounded-md">
            {colors.map((color, index) => {
              return (
                <div key={color.name + index} className="mt-2 p-1 ">
                  <div
                    onClick={() => {
                      handleUpdatingColors(color.value, color.name);
                    }}
                    style={{ backgroundColor: color.value }}
                    className="h-[30px] w-[30px] rounded-full cursor-pointer border"
                  ></div>
                </div>
              );
            })}
          </div>
          <p className="my-5  md:grid sm:grid md:grid-cols-4 sm:grid-cols-3 flex flex-row overflow-x-auto gap-2 text-center">
            {productColors.map((color, index) => {
              return (
                <span
                  key={color.name + index}
                  className="border-2 mb-2 py-2 px-4 rounded-md mr-2"
                >
                  {color.name}
                </span>
              );
            })}
          </p>

          {/* <-------------------- description ------------------------> */}
          <p className=" text-xl font-['Quicksand'] mb-5  "> Description</p>
          <textarea
            rows={4}
            className="mb-6  block p-2.5 w-full  text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Product Description?"
            onChange={(event) => {
              const value = event.target.value;
              setDescription(value);
            }}
          ></textarea>
          <div
            onClick={() => {
              if (price && title && description && quantity) {
                const newData: uploadProductInter = {
                  price: price,
                  name: title,
                  stocks: quantity,
                  description: description,
                };
                handleUploadProduct(newData);
              } else {
                //  handle when the feild is empty
                console.log("did not complete the product properly");
              }
            }}
            className=" opacity-90 hover:opacity-[1] cursor-pointer rounded-md w-full p-5 text-center bg-primary-color text-white"
          >
            <h4>Upload</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default UploadProductForm;
