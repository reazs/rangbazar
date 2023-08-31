import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ShopPage from "../pages/ShopPage/ShopPage";
import ContactPage from "../pages/ContactPage/ContactPage";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Navbrand from "./Navbrand";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import UserHomePage from "../pages/UserPage/UserHomePage";
import Utils from "../utils/Utils";
import Error404Page from "../pages/ErrorPage/Error404Page";
import BASE_URL from "../config/BaseURL";
import UploadProductPage from "../pages/UploadProductPage/UploadProductPage";
import CartPage from "../pages/CartPage/CartPage";
import orderListIcon from "../../src/assets/icons/order-list-icon.png";
import ViewOrderPage from "../pages/ViewOrderPage/ViewOrderPage";
export default function NavBarEx() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isUser, setIsUser] = useState<boolean>();
  const navigate = useNavigate();
  async function loadUser() {
    const data = await Utils.loadUser();
    if (data == "Token Expired") {
      setIsUser(false);
    } else {
      setIsUser(true);
    }
    console.log(data);
  }
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    loadUser();
  }, []);
  async function handleLogout() {
    const url = BASE_URL + "/users/logout";
    const token = window.localStorage.getItem("token");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    });
    const responseData = await response.json();
    console.log(responseData);
    if (responseData.status == "ok") {
      navigate("/sign-in");
      window.location.reload();
    }
  }
  const navList = (
    <ul className="mb-4 mt-2  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to="/"
          className="flex items-center"
        >
          Home
        </Link>
      </Typography>
      {isUser && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to="/user"
            className="flex items-center"
          >
            User
          </Link>
        </Typography>
      )}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to="/shop"
          className="flex items-center"
        >
          Shop
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to="/about"
          className="flex items-center"
        >
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to="/contact"
          className="flex items-center"
        >
          Contact
        </Link>
      </Typography>
      {isUser && (
        <>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to="/user/cart"
              className="flex items-center text-2xl"
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              to="/user/view-orders"
              className="flex items-center text-2xl"
            >
              <img src={orderListIcon} className="h-[28px] w-f[28px]" />
            </Link>
          </Typography>
        </>
      )}
    </ul>
  );

  return (
    <>
      <Navbar className="sticky   text-primary-color  inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            {/* navbrand */}
            <div className="h-[40px] w-[140px]">
              <Navbrand />
            </div>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block text-black border border-white hover:bg-primary-color hover:text-white rounded-md"
            >
              {isUser ? (
                <>
                  <span onClick={handleLogout}>Log Out</span>
                </>
              ) : (
                <>
                  <Link to={"/sign-in"}>
                    <span>Sign In</span>
                  </Link>
                </>
              )}
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse className="mb-2" open={openNav}>
          {navList}
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="text-center border text-black border-white hover:bg-primary-color hover:text-white rounded-md"
          >
            {isUser ? (
              <>
                <span onClick={handleLogout}>Log Out</span>
              </>
            ) : (
              <>
                <Link to={"/sign-in"}>
                  <span>Sign In</span>
                </Link>
              </>
            )}
          </Button>
        </Collapse>
      </Navbar>

      {/* creating routes */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/shop/product-details/:title/:productId"
          element={<ProductDetailsPage />}
        />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/user" element={<UserHomePage />} />
        <Route path="/error-404" element={<Error404Page />} />
        <Route path="/user" element={<UserHomePage />} />
        <Route path="/upload-product" element={<UploadProductPage />} />
        <Route path="/user/cart" element={<CartPage />} />
        <Route path="/user/view-orders" element={<ViewOrderPage />} />
      </Routes>
    </>
  );
}
