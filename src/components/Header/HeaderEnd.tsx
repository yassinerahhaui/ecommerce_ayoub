"use client";
import Image from "next/image";
import cream from "@/assets/images/cream.png";
import { HeaderEnd1 } from "@/interfaces/header";
import { motion } from "framer-motion";

const HeaderEnd = (props: HeaderEnd1) => {
  return (
    <div className="relative p-6 md:p-0 md:absolute w-full md:w-80 z-10 md:top-[50%] md:end-10 md:transform md:translate-y-[-50%]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center border-b-4 cursor-pointer border-primary pb-4 mb-4"
      >
        <Image src={cream} alt="cream icon image" width={40} height={40} />
        <h3 className="text-xl font-bold p-3 w-full md:w-max text-center md:text-start">
          {props.masque}
        </h3>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center border-b-4 cursor-pointer border-primary pb-4 mb-4"
      >
        <Image src={cream} alt="cream icon image" width={40} height={40} />
        <h3 className="text-xl font-bold p-3 w-full md:w-max text-center md:text-start">
          {props.palette}
        </h3>
      </motion.div>
      <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-max mt-4 bg-primary text-white font-semibold text-md rounded py-4 px-6 hover:bg-primary-dark"
      >
        {props.acheter}
      </motion.button>
    </div>
  );
};

export default HeaderEnd;
