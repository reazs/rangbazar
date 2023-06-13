import { useState } from "react";
import Footer from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import UtilLoadRive from "../../utils/UtilLoadRive";
import { emailRegex, passwordRegex } from "../../utils/regexUtils";
import Utils from "../../utils/ScreenTimeUtils";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const SignUpPage = () => {
  const navigate = useNavigate();
  const [fName, setFname] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordMatch, setPasswordMatch] = useState<Boolean>();
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState<Boolean>();
  const [isValidPassword, setIsValidPassword] = useState<Boolean>();

  async function handleLogin() {
    if (isValidEmail && isValidPassword && passwordMatch) {
      const url = "http://localhost:3000/users/sign-up";
      try {
        const data = {
          fName: fName,
          lName: lName,
          email: email,
          password: password,
        };
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const responseData = await response.json();
        console.log(responseData);
        Utils.delay(1500).then(() => {
          navigate("/sign-in");
        });
      } catch (error) {
        console.log({ error: error });
      }
    }
  }

  return (
    <>
      <div className="mt-20 max-w-screen-sm mx-auto  text-center">
        <Reveal>
          <h4 className="md:text-6xl text-5xl  px-5  font-medium font-['Josefin-Sans']">
            Join Us and Elevate Your Experience!
          </h4>
        </Reveal>
      </div>
      <div className=" max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 ">
          {/* left div */}
          <div className="w-full  flex flex-row justify-center items-center">
            <div className="w-full px-[10%]">
              <form>
                {/* First Name ------------> */}
                <p className="mt-[50px] text-xl font-['Quicksand']  ">
                  First Name
                </p>
                <input
                  className="mb-6  h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                  placeholder="John"
                  onChange={(event) => {
                    const value = event.target.value;
                    setFname(value);
                  }}
                  value={fName}
                ></input>
                {/* Last Name ------------> */}
                <p className=" text-xl font-['Quicksand']  ">Last Name</p>
                <input
                  className="mb-6  h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                  placeholder="Wick"
                  onChange={(event) => {
                    const value = event.target.value;
                    setLName(value);
                  }}
                  value={lName}
                ></input>
                {/*  Email ------------> */}
                <p className=" text-xl font-['Quicksand']  ">Email</p>
                <p
                  className={
                    isValidEmail == false ? "text-red-400 text-center" : ""
                  }
                >
                  {isValidEmail == false && "Invalid Email"}
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

                {/* Password ------------> */}
                <p className=" text-xl font-['Quicksand']  ">Password</p>
                <p
                  className={
                    isValidPassword == false ? "text-red-400 text-center" : ""
                  }
                >
                  {isValidPassword == false &&
                    "Invalid password. Must contain at least 8 characters and one uppercase letter."}
                </p>
                <input
                  type="password"
                  className="mb-6  h-10 text-center w-[100%] px-2 border-b-2  focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                  placeholder="Enter Your password"
                  onChange={(event) => {
                    const value = event.target.value;
                    if (passwordRegex.test(password)) {
                      setIsValidPassword(true);
                    } else {
                      setIsValidPassword(false);
                    }

                    setPassword(value);
                  }}
                  value={password}
                ></input>
                {/* Confirm Password ------------> */}
                <p className=" text-xl font-['Quicksand']  ">
                  Confirm Password
                </p>
                <p
                  className={
                    passwordMatch == false ? "text-red-400 text-center" : ""
                  }
                >
                  {passwordMatch == false && "Password Did Not Matched."}
                </p>
                <input
                  className="mb-6  h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                  placeholder="Enter Your Password"
                  type="password"
                  onChange={(event) => {
                    const value = event.target.value;
                    if (value != password) {
                      setPasswordMatch(false);
                    } else {
                      setPasswordMatch(true);
                    }
                  }}
                ></input>
                <div className="flex flex-row-reverse">
                  <div className="text-end text-gray-400">
                    Already Have Account!
                    <Link className=" hover:text-black" to={"/sign-in"}>
                      {" "}
                      Sign In.
                    </Link>
                  </div>
                </div>
                {/* Submit button */}
                <div
                  className="h-[109.5px] w-[225px] cursor-pointer "
                  onClick={handleLogin}
                >
                  <UtilLoadRive src="./riveAssets/submit-btn.riv" />
                </div>
              </form>
            </div>
          </div>
          {/* right div */}
          <div className="h-[600px] overflow-hidden">
            <UtilLoadRive src="./riveAssets/sneaky-raccoon.riv" />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};
export default SignUpPage;
