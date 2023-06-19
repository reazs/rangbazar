import React, { ChangeEvent, useState, useEffect } from "react";
import FileUtils from "../../utils/FileUtils";
import UploadImagePreview from "./UploadImagePreview";
import UploadProductForm from "./UploadProductForm";
import BASE_URL from "../../config/BaseURL";

import { error } from "console";
import { stringify } from "querystring";
import { colors } from "../../models/Products";
export interface SelectedColorInterf {
  name: string;
  color: string;
}
const UploadProductPage: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImage, setCurrentImage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [selectedProductCategories, setSelectedCategories] = useState<string[]>(
    []
  );
  const [selectedSizeCategories, setSelectedSizeCategories] = useState<
    string[]
  >([]);
  const [selectedAgeCategories, setSelectedAgeCategories] = useState<string[]>(
    []
  );

  const addSelectedCategory = (
    id: string,
    categoryName: "product" | "age" | "size",
    categoryDiv: HTMLDivElement
  ) => {
    categoryDiv.classList.add("border-primary-color");

    if (categoryName == "age") {
      setSelectedAgeCategories((prevAgeCateg: string[]) => {
        return [...prevAgeCateg, id];
      });
    } else if (categoryName == "product") {
      setSelectedCategories((prevAgeCateg: string[]) => {
        return [...prevAgeCateg, id];
      });
    } else if (categoryName == "size") {
      setSelectedSizeCategories((prevAgeCateg: string[]) => {
        return [...prevAgeCateg, id];
      });
    }
  };
  const removeSelectedCategory = (
    id: string,
    categoryName: "product" | "age" | "size"
  ) => {
    if (categoryName == "age") {
      setSelectedAgeCategories((prevAgeCategories: string[]) => {
        prevAgeCategories = prevAgeCategories.filter((categ) => {
          if (categ != id) {
            return categ;
          }
        });

        return [...prevAgeCategories];
      });
    } else if (categoryName == "product") {
      setSelectedCategories((prevCategories: string[]) => {
        prevCategories = prevCategories.filter((categ) => {
          if (categ != id) {
            return categ;
          }
        });

        return [...prevCategories];
      });
    } else if (categoryName == "size") {
      setSelectedSizeCategories((prevCategories: string[]) => {
        prevCategories = prevCategories.filter((categ) => {
          if (categ != id) {
            return categ;
          }
        });

        return [...prevCategories];
      });
    }
  };
  const handleSelectedCategory = (
    id: string,
    categoryName: "product" | "size" | "age"
  ) => {
    const categoryDiv = document.getElementById(id) as HTMLDivElement;
    if (categoryDiv) {
      if (categoryDiv.classList.contains("border-primary-color")) {
        categoryDiv.classList.remove("border-primary-color");
        removeSelectedCategory(id, categoryName);
      } else {
        categoryDiv.classList.add("border-primary-color");
        addSelectedCategory(id, categoryName, categoryDiv);
      }
    }
  };
  const [productColors, setProductsColors] = useState<SelectedColorInterf[]>(
    []
  );
  const handleFileChanges = (event: ChangeEvent<HTMLInputElement>) => {
    function handleCallback(images: string[], file: File) {
      setCurrentImage(images[0]);
      setSelectedFiles((prevFiles) => {
        return [...prevFiles, file];
      });
      setSelectedImages((prevImage: string[]) => {
        return [images[0], ...prevImage];
      });
    }
    FileUtils.getLoadedImages(event, handleCallback);
  };
  const handleUpdatingColors = (color: string, name: string) => {
    setProductsColors((prevColors: SelectedColorInterf[]) => {
      const colorIndex = prevColors.findIndex(
        (prevColor: SelectedColorInterf) => prevColor.color === color
      );

      if (colorIndex >= 0) {
        // Create a new array without the color to remove
        const updatedColors = prevColors.filter(
          (_, index: number) => index !== colorIndex
        );
        return updatedColors;
      } else {
        // Add the new color to the array
        const updatedColors = [...prevColors, { color: color, name: name }];
        return updatedColors;
      }
    });
  };

  const handleUploadProduct = async (data: {
    name: string | undefined;
    price: number | undefined;
    stocks: number | undefined;
    description: string | undefined;
  }) => {
    try {
      const newData = {
        ...data,
        colors: productColors,
        genderCategory: selectedAgeCategories,
        productCategory: selectedProductCategories,
        sizes: selectedSizeCategories,
      };
      const response = await fetch(BASE_URL + "/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      const responseData = await response.json();
      if (response.status == 201) {
        const productId = responseData._id;
        console.log("productID", productId);
        // prints the product id fine
        const formData = new FormData();
        selectedFiles.forEach((file) => {
          formData.append("images", file);
          formData.append("productId", productId);
        });
        try {
          const response = await fetch(BASE_URL + "/upload-products-images", {
            method: "POST",
            headers: {
              productId: productId,
            },
            body: formData,
          });
          const responseData = await response.json();
          console.log(responseData);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log({
        error: error,
        message: "failed to fetch the URL",
      });
    }
  };

  return (
    <>
      <div className=" max-w-screen-xl mx-auto">
        <div>
          <h1 className="large-thin-heading my-14 text-center">
            Upload Your Product
          </h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 mx-10 gap-5">
          {/* left Container */}
          <UploadImagePreview
            images={selectedImages}
            handleFileChanges={handleFileChanges}
            currentImage={currentImage}
          />

          {/* right Container */}
          <UploadProductForm
            handleUpdatingColors={handleUpdatingColors}
            productColors={productColors}
            handleUploadProduct={handleUploadProduct}
            handleSelectedCategory={handleSelectedCategory}
          />
        </div>
        {/* extra bottom space */}
        <div className="h-[300px]"></div>
        {/* how to display image from static server uploads */}
        <img
          className="h-[300px]"
          src={
            "http://localhost:3000/" +
            "uploads/1686922789407prfm-style-painters-model-matte-digital-painting-partially-nude-delicate-face-soft-skin-soft--.png"
          }
        />
        {/* extra bottom space */}
        <div className="h-[300px]"></div>
      </div>
    </>
  );
};

export default UploadProductPage;
