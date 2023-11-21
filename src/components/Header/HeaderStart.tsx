"use client";
import { HeaderStart1 } from "@/interfaces/header";
import { motion } from "framer-motion";

const HeaderStart = (props: HeaderStart1) => {
  return (
    <div className="z-10 w-full py-10 relative text-center md:text-start md:absolute md:top-[50%] md:start-10 md:transform md:translate-y-[-50%] md:w-96">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-12 mx-auto md:mx-0 border mb-3 border-primary rounded border-w-4"
      ></motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-primary text-xl text-shadow text-shadow-md-none font-semibold tracking-wider"
      >
        {props.welcome}
      </motion.div>
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl my-4 text-black font-bold"
      >
        {props.title}
      </motion.h1>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-sm px-4 md:px-0 md:text-md text-gray-900 font-medium"
      >
        {props.description}
      </motion.p>
    </div>
  );
};

export default HeaderStart;
