import { useState } from "react";
import { emailRegex } from "../../utils/regexUtils";
import { Reveal } from "../../components/Reveal";
import { Layout, Fit, useRive, Alignment } from "rive-react";
import UtilLoadRive from "../../utils/UtilLoadRive";
import { Link, useNavigate } from "react-router-dom";
import Utils from "../../utils/Utils";
import BASE_URL from "../../config/BaseURL";
const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>();
  const [userFound, setUserFound] = useState<boolean>();
  const [isValidPassword, setIsValidPassword] = useState<boolean>();
  const navigate = useNavigate();
  const { RiveComponent } = useRive({
    src: "./riveAssets/gang.riv",
    artboard: "Action!",
    autoplay: true,
    stateMachines: "State Machine 1",
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
  });
  const handleSignIn = async () => {
    try {
      const url = BASE_URL + "/users/sign-in";
      const data = {
        email: email,
        password: password,
      };
      if (isValidEmail) {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const responseData = await response.json();

        Utils.delay(1000).then(() => {
          if (responseData.error == "Invalid Password") {
            setIsValidPassword(false);
          } else if (response.status == 404) {
            setUserFound(false);
          }
          if (responseData.status == "ok") {
            setUserFound(true);
            const token = responseData.data;
            window.localStorage.setItem("token", token);
            navigate("/user");
            window.location.reload();
          }
        });
      }
    } catch (error) {
      console.log({ error: error });
    }
  };
  return (
    <>
      <div className="mt-20 max-w-screen-sm mx-auto  text-center">
        <Reveal>
          <h4 className="md:text-6xl text-5xl py-2  px-5  font-medium font-['Josefin-Sans']">
            Welcome back to <span className="logo-fontstyle">RangBazaar </span>
          </h4>
        </Reveal>
      </div>
      <div className="h-[300px] w-full md:hidden block">
        <div className="h-full w-[98%] mx-auto mt-5">
          <UtilLoadRive src="/riveAssets/gang.riv" />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto md:mt-[100px] mt-5">
        <div className="grid md:grid-cols-2">
          {/* left container */}
          <div className="w-full flex flex-row justify-center items-center">
            <div className="w-full px-[10%]">
              <p className=" text-xl font-['Quicksand']  ">Email</p>
              <p
                className={
                  isValidEmail == false ? "text-red-400 text-center" : ""
                }
              >
                {isValidEmail == false && "Invalid Email"}
              </p>
              <p
                className={userFound == false ? "text-red-400 text-center" : ""}
              >
                {userFound == false && "User Not Found"}
              </p>
              <input
                className="mb-6  h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                placeholder="example@gmail.com"
                onChange={(event) => {
                  const value = event.target.value;
                  if (emailRegex.test(value)) {
                    setIsValidEmail(true);
                  } else {
                    setIsValidEmail(false);
                  }
                  setEmail(value);
                }}
                value={email}
              ></input>
              <p className=" text-xl font-['Quicksand']  ">Password</p>
              <p
                className={
                  isValidPassword == false ? "text-red-400 text-center" : ""
                }
              >
                {isValidPassword == false && "Password Did Not Matched"}
              </p>
              <input
                type="password"
                className="mb-6  h-10 text-center w-[100%] px-2 border-b-2  focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                placeholder="Enter Your password"
                onChange={(event) => {
                  const value = event.target.value;
                  setPassword(value);
                }}
                value={password}
              ></input>
              <div className="flex flex-row-reverse">
                <div className="text-end text-gray-400">
                  <span className="">
                    Don't have account!
                    <Link className=" hover:text-black" to={"/sign-up"}>
                      {" "}
                      Sign up.
                    </Link>
                  </span>
                  <p>
                    <Link className="hover:text-black" to={""}>
                      {" "}
                      Forgot Password
                    </Link>
                  </p>
                </div>
              </div>
              {/* submit btn */}
              <div
                onClick={handleSignIn}
                className="h-[109.5px] md:w-[225px] md:mt-0 mt-5 w-full cursor-pointer "
              >
                <div className="h-[60%] w-full bg-opacity-90 rounded-md hover:bg-opacity-[1] bg-primary-color flex flex-row justify-center items-center">
                  <p className="text-2xl text-white">Sign In</p>
                </div>
              </div>
            </div>
          </div>
          {/* right container */}
          <div className="h-[500px] w-full md:block hidden">
            <div className="h-full w-[98%] mx-auto ">
              <RiveComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
