import React from "react";
import ContactImg from "../../assets/contact-img.svg";
import Footer from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { SlideTransition } from "../../components/SlideTransition";
const ContactPage: React.FC = () => {
  return (
    <>
      <div className=" max-w-screen-xl mt-[100px]  mx-auto">
        <form className="px-[5%]">
          <div className="grid lg:grid-cols-2">
            {/* left container */}
            <div>
              <Reveal>
                <h4 className="text-6xl font-medium font-['Josefin-Sans']">
                  Love to hear from you, Get in Touch
                </h4>
              </Reveal>
              <p className="mt-[50px] text-xl font-['Quicksand']  ">
                Your Name
              </p>
              <input
                className="mb-6  h-10 text-center w-[80%] px-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                placeholder="John Wick"
              ></input>
              <p className="text-xl font-['Quicksand']  ">Your Email</p>
              <input
                className="mb-6  h-10 text-center w-[80%] px-2 focus:outline-none focus:border-b-2 focus:border-b-primary-color"
                placeholder="example@gmail.com"
              ></input>
              <p className="mb-6 text-xl font-['Quicksand']  ">
                Your Request is for
              </p>
              <select className="mb-6 w-[80%] h-10" id="request-for">
                <option className="py-5">Customer Servise</option>
                <option className="py-5">Submiting a Complaint</option>
                <option className="py-5">To report a bugs</option>
              </select>
              <p className="mb-6 text-xl font-['Quicksand']  ">Your Message</p>
              <textarea
                id="message"
                rows={6}
                className="mb-6 block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="How can we help?"
              ></textarea>
              <button
                type="submit"
                className="h-14 w-full text-center border-2 hover:bg-primary-color hover:text-white "
              >
                Submit Request
              </button>
            </div>

            {/* right container */}
            <div className="flex flex-col justify-end px-5">
              <SlideTransition>
                <img src={ContactImg} />
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
