import react, { ChangeEvent } from "react";
type UploadImagePreviewType = {
  images: string[];
  currentImage: string;
  handleFileChanges: (event: ChangeEvent<HTMLInputElement>) => void;
};
const UploadImagePreview = ({
  images,
  handleFileChanges,
  currentImage,
}: UploadImagePreviewType) => {
  return (
    <div className="flex flex-row justify-center items-start">
      <div>
        {/* upload image section default image */}
        <div>
          <div
            className="md:h-[400px] md:mx-0 mx-auto h-[300px] md:w-[300px] w-[225px] object-cover mb-5 rounded-md"
            style={{
              backgroundImage: `url(${
                currentImage ||
                "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg"
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
            id="formFile"
            onChange={handleFileChanges}
          />
          <div className="w-full h-full md:grid gap-1 md:grid-cols-3 md:overflow-x-hidden mt-5 flex flex-row overflow-x-auto">
            {images.map((url, index) => {
              return (
                <img
                  key={index + url}
                  className=" mr-2   md:w-full md:h-[200px] h-[130px] w-[98px]  object-cover rounded-md mx-2"
                  src={url}
                ></img>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImagePreview;
