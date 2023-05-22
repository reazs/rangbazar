import React from "react";
import { motion as m } from "framer-motion";
const ContactPage: React.FC = () => {
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.75,
          ease: "easeOut",
        }}
        className="text-grey-900  top-0 left-0 w-full h-full bg-orange-100 lg:px-48 px-16"
      >
        <div className="overflow-hidden">
          <m.div
            initial={{ y: "200%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
            className=""
          >
            <h1 className="big-heading ">Contact Page</h1>
          </m.div>
        </div>
        <div className="h-[500px] w-full bg-red-400"></div>
      </m.div>
    </>
  );
};

export default ContactPage;
