import React, { ChangeEvent, useRef, useState } from "react";
import FileUtils from "../../utils/FileUtils";
const UploadProductPage: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const handleFileChanges = async (event: ChangeEvent<HTMLInputElement>) => {
    function handleCallback(images: string[]) {
      setImages(images);
    }
    FileUtils.getLoadedImages(event, handleCallback);
  };

  return (
    <>
      <div className=" max-w-screen-xl mx-auto">
        <div>
          <h1 className="large-thin-heading my-14 text-center">
            Upload Your Product
          </h1>
        </div>
        <div className="grid md:grid-cols-2 mx-10 gap-5">
          {/* left column */}
          <div className="flex flex-row justify-center items-center">
            <div>
              {/* upload image section default image */}
              <div>
                <img
                  className="h-[400px] w-[300px] object-cover mb-5"
                  src={
                    images[0]
                      ? images[0]
                      : "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg"
                  }
                />
                <input
                  className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  type="file"
                  id="formFile"
                  multiple
                  onChange={handleFileChanges}
                />
                <div className="w-full mt-5 flex flex-row overflow-x-auto">
                  {images.slice(1).map((url, index) => {
                    return (
                      <img
                        key={index}
                        className="h-[200px], w-[150px] object-cover rounded-md mx-2"
                        src={url}
                      ></img>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* right column */}
          <div className="flex flex-row justify-center items-center w-full">
            <div className="w-full">
              {/* <-------------------- Title ------------------------> */}
              <p className=" text-xl font-['Quicksand']  ">Name</p>
              <input
                className="mb-6  h-10 text-center w-[100%] px-2 border-b-2  focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                placeholder="Enter Product Name"
              />
              {/* <-------------------- Price ------------------------> */}
              <p className=" text-xl font-['Quicksand']  ">Price</p>
              <input
                className="mb-6  h-10 text-center w-[100%] px-2 border-b-2  focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                placeholder="Enter Product Price"
              />
              {/* <-------------------- Price ------------------------> */}
              <p className=" text-xl font-['Quicksand']  "> Cateogry</p>
              <input
                className="mb-6  h-10 text-center w-[100%] px-2 border-b-2  focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                placeholder="Enter Product Cateogry"
              />
              {/* <-------------------- Varients ------------------------> */}
              <p className=" text-xl font-['Quicksand']  "> Colors</p>
              <input
                className="mb-6  h-10 text-center w-[100%] px-2 border-b-2  focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                placeholder="red, blue, green..."
              />
              {/* <-------------------- description ------------------------> */}
              <p className=" text-xl font-['Quicksand'] mb-5  "> Description</p>
              <textarea
                rows={4}
                className="mb-6  block p-2.5 w-full  text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Product Description?"
              ></textarea>
              <div className=" opacity-90 hover:opacity-[1] cursor-pointer rounded-md w-full p-5 text-center bg-primary-color text-white">
                <h4>Upload</h4>
              </div>
            </div>
          </div>
        </div>
        {/* extra bottom space */}
        <div className="h-[300px]"></div>
      </div>
    </>
  );
};

export default UploadProductPage;
