"use client";
import { HeaderStart1 } from "@/interfaces/header";
import { motion } from "framer-motion";

const HeaderStart = (props: HeaderStart1) => {
  return (
    <div className="z-10 absolute top-[50%] start-10 transform translate-y-[-50%] w-96">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-12 border mb-3 border-green-600 rounded border-w-4"
      ></motion.div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-green-600 text-xl font-semibold tracking-wider"
      >
        {props.welcome}
      </motion.div>
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-7xl my-4 text-black font-bold"
      >
        {props.title}
      </motion.h1>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-md text-gray-900 font-medium"
      >
        {props.description}
      </motion.p>
    </div>
  );
};

export default HeaderStart;
