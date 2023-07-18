import { Link } from "react-router-dom";
import products from "../../models/Products";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import {
  ClothingProductInterF,
  colorInterF,
  reviewInterF,
} from "../../Interface/Product";
import BASE_URL from "../../config/BaseURL";
const UserFeaturedContainer = () => {
  const [clothProducts, setClothProducts] = useState<ClothingProductInterF[]>(
    []
  );
  const featuredProduct = clothProducts.reverse().slice(0, 6);
  const handleLoadProducts = async () => {
    const url = BASE_URL + "/products";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status == 200) {
        const products: ClothingProductInterF[] = await response.json();

        const updatedProducts: ClothingProductInterF[] = [];
        products.forEach((product: ClothingProductInterF) => {
          const newProduct: ClothingProductInterF = {
            ...product,
          };
          console.log("Product ID---->", newProduct._id);
          const productExist = clothProducts.findIndex((prod) => {
            prod._id === newProduct._id;
          });
          if (productExist !== -1) {
            updatedProducts.push(...clothProducts);
          } else {
            updatedProducts.push(...clothProducts, newProduct);
          }
        });
        setClothProducts(updatedProducts);
      }
    } catch (error) {
      console.log("could not fetch the URL");
    }
  };
  useEffect(() => {
    handleLoadProducts();
  }, []);
  return (
    <>
      <div className="mt-10">
        <div className="flex flex-row justify-between josefin-sans">
          <p className="md:text-2xl mb-10 text-xl  text-gray-400 font-medium">
            Featured
          </p>
          <Link to="/shop">
            <p className=" mb-10 text-xl text-gray-400 font-medium">See All</p>
          </Link>
        </div>
        <div className="flex flex-row overflow-x-auto gap-2 overflow-y-hidden h-[550px]">
          {/* <div className="h-[300px] mb-2  w-[400px] bg-red-300 flex-shrink-0"></div>
              <div className="h-[300px] mb-2   w-[400px] bg-cyan-500 flex-shrink-0"></div>
              <div className="h-[300px] mb-2  w-[400px] bg-teal-500 flex-shrink-0"></div> */}
          {featuredProduct.map((product) => {
            return (
              <>
                <Link
                  to={
                    "/shop/product-details/" + product.name + "/" + product._id
                  }
                >
                  <ProductCard {...product} />
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UserFeaturedContainer;
