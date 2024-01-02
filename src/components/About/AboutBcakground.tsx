"use client";
import Image from "next/image";
import bgMobile from "../../../public/images/backgroundContact.jpg";
import { Link } from "@/navigation";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";

interface AboutInterface {
  about: string;
  home: string;
}

const AboutBcakground = ({ about, home }: AboutInterface) => {
  const transition =
    "hover:text-[#33B244] transition-all duration-300 cursor-pointer";
  return (
    <div className="relative h-[14.6875rem] sm:h-[18.15rem] lg:h-[25rem]">
      <Image
        className="opacity-20 -z-10 absolute top-0 start-0 w-full h-full"
        src={bgMobile}
        alt="bg-contact"
      />
      <div className="max-w-[90rem] m-auto p-6 md:px-20 flex flex-col sm:flex-row sm:justify-between items-center justify-center h-full gap-4">
        <motion.h2
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-black text-center font-bold text-5xl "
        >
          {about}
        </motion.h2>
        <ul className="flex text-center gap-3">
          <li className={transition}>
            <Link href={"/"}>{home}</Link>
          </li>
          <li className="self-center">
            {localStorage.getItem("language") === "ar" ? (
              <IoIosArrowBack />
            ) : (
              <IoIosArrowForward />
            )}
          </li>
          <li className={transition}>{about}</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutBcakground;
