import { useEffect, useState } from "react";
import Utils from "../../utils/Utils";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";
import UserTopContainer from "./UserTopContainer";
import UserFeaturedContainer from "./UserFeaturedContainer";
import products from "../../models/Products";
import BASE_URL from "../../config/BaseURL";
import {
  ClothingProductInterF,
  colorInterF,
  reviewInterF,
} from "../../Interface/Product";
const UserHomePage = () => {
  const [userId, setUserId] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [clothProducts, setClothProducts] = useState<ClothingProductInterF[]>(
    []
  );
  const navigator = useNavigate();
  const loadUser = async () => {
    const data = await Utils.loadUser();
    if (data == "Token Expired") {
      navigator("/error-404");
    }
    setUserId(data._id);
    setFName(data.fName);
    setLName(data.lName);
    setEmail(data.email);
  };
  function focus() {
    const searchFeild = document.getElementById(
      "search-feild"
    ) as HTMLInputElement;
    const searchContainer = document.getElementById(
      "search-container"
    ) as HTMLDivElement;
    const searchIcon = document.getElementById("search-icon") as HTMLElement;
    searchFeild.addEventListener("focus", () => {
      searchContainer.classList.add("border-2");
      searchContainer.classList.add("rounded-md");
      searchIcon.classList.remove("text-gray-300");
      searchIcon.classList.add("text-black");
    });
    searchFeild.addEventListener("blur", () => {
      searchContainer.classList.remove("border-2");
      searchContainer.classList.remove("rounded-md");
      searchIcon.classList.add("text-gray-300");
      searchIcon.classList.remove("text-black");
    });
  }
  const favoriteItems = clothProducts.slice(8, 10);
  useEffect(() => {
    loadUser();
    focus();
    handleLoadProducts();
  }, []);
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
  return (
    <>
      <div className=" max-w-screen-xl mx-auto">
        <div className="mt-[100px] lg:mx-20 mx-10">
          <UserTopContainer />
          <UserFeaturedContainer />
          <div className="mt-10">
            <div className="flex flex-row josefin-sans justify-between">
              <p className="md:text-2xl text-xl font-medium  text-gray-400">
                Favorites
              </p>
              <p className="text-xl text-gray-400">See All</p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
              {favoriteItems.map((products) => {
                return (
                  <>
                    <Link
                      to={
                        "/shop/product-details/" +
                        products.name +
                        "/" +
                        products._id
                      }
                    >
                      <ProductCard {...products} />
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default UserHomePage;
