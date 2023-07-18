import React, { useState, useEffect, useRef } from "react";
import Footer from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { SlideTransition } from "../../components/SlideTransition";
import Utils from "../../utils/Utils";
import ColorLoading from "../../components/ColorLoading";
import ToematerTimer from "./ToematerTimer";
import {
  ContactFormErrorItnerF,
  ContactFormInterF,
} from "../../Interface/ContactFormInterF";

const ContactPage: React.FC = () => {
  const [isLoadingShow, setIsLoadingShow] = useState(true);
  const [isShowingImg, setIsShowingImg] = useState(true);
  const [error, setError] = useState<ContactFormErrorItnerF>({});
  const [formData, setFormData] = useState<ContactFormInterF>({
    name: "",
    email: "",
    request: "",
    message: "",
  });
  function handleResize() {
    if (document.documentElement.clientWidth < 1024) {
      setIsShowingImg(false);
    } else {
      setIsShowingImg(true);
    }
  }

  useEffect(() => {
    Utils.delay(500).then(() => {
      setIsLoadingShow(false);
    });

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const newData: ContactFormInterF = {
        ...prevData,
        [name]: value,
      };
      return newData;
    });
    console.log(formData);
  };
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const err = Utils.contactFormValidate(formData);
    if (Object.keys(err).length == 0) {
      // form is validate and ready to submit
    } else {
      setError(err);
    }
  };
  return isLoadingShow ? (
    <>
      <ColorLoading />
    </>
  ) : (
    <>
      <div className=" max-w-screen-xl mt-[100px]  mx-auto">
        <form onSubmit={handleSubmitForm} className="px-[5%]">
          <div className="grid lg:grid-cols-2">
            {/* left container */}
            <div>
              <Reveal>
                <h4 className="md:text-6xl text-4xl font-medium font-['Josefin-Sans']">
                  Love to hear from you, Get in Touch
                </h4>
              </Reveal>
              <p className="mt-[50px] text-xl font-['Quicksand']  ">
                Your Name
              </p>
              {error.name && <p className="text-red-500">{error.name}</p>}
              <input
                onChange={handleChange}
                name="name"
                className="mb-6  h-10 text-center w-[100%] px-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                placeholder="John Wick"
              ></input>
              <p className="text-xl font-['Quicksand']  ">Your Email</p>
              {error.email && <p className="text-red-500">{error.email}</p>}
              <input
                onChange={handleChange}
                name="email"
                className="mb-6  h-10 text-center w-[100%] px-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                placeholder="example@gmail.com"
              ></input>
              <p className="mb-6 text-xl font-['Quicksand']  ">
                Your Request is for
              </p>
              {error.request && <p className="text-red-500">{error.request}</p>}
              <select
                onChange={handleChange}
                className="mb-6 w-[100%] h-10 text-center"
                name="request"
              >
                <option className="py-5">Customer Servise</option>
                <option className="py-5">Submiting a Complaint</option>
                <option className="py-5">To report a bugs</option>
              </select>
              <p className="mb-6 text-xl font-['Quicksand']  ">Your Message</p>
              {error.message && <p className="text-red-500">{error.message}</p>}
              <textarea
                onChange={handleChange}
                name="message"
                rows={6}
                className="mb-6 block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="How can we help?"
              ></textarea>
              <button
                id="submit-btn"
                type="submit"
                onClick={handleSubmitForm}
                className="h-14 w-full text-center border-2 hover:bg-primary-color hover:text-white "
              >
                Submit Request
              </button>
            </div>

            {/* right container */}
            <div
              style={{
                display: isShowingImg ? "" : "none",
              }}
              className="flex flex-col justify-end px-5"
            >
              <SlideTransition>
                <ToematerTimer />
              </SlideTransition>
            </div>
          </div>
        </form>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
