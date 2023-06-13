import { useState } from "react";
import Footer from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import UtilLoadRive from "../../utils/UtilLoadRive";

const SignUpPage = () => {
  const [fName, setFname] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleOnSubmit = async () => {
    const url = "http://localhost:3000/users";
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
    } catch (error) {
      console.log({ error: error });
    }
  };
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
        <div className="grid md:grid-cols-2 flex-cols-1">
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
                {/* Last Email ------------> */}
                <p className=" text-xl font-['Quicksand']  ">Email</p>
                <input
                  className="mb-6  h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                  placeholder="example@gmail.com"
                  onChange={(event) => {
                    const value = event.target.value;
                    setEmail(value);
                  }}
                  value={email}
                ></input>
                {/* Password ------------> */}
                <p className=" text-xl font-['Quicksand']  ">Password</p>
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
                {/* Confirm Password ------------> */}
                <p className=" text-xl font-['Quicksand']  ">
                  Confirm Password
                </p>
                <input
                  className="mb-6  h-10 text-center w-[100%] px-2 border-b-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                  placeholder="Enter Your Password"
                ></input>

                <div
                  className="h-[109.5px] w-[225px] cursor-pointer "
                  onClick={handleOnSubmit}
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
