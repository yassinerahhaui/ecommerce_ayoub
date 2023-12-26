"use client";
import img from "@/assets/images/blog-header.jpg";
import { language } from "@/elements/GlobalFunc";
import Image from "next/image";
import { motion } from "framer-motion";

const BlogHeader = () => {
  return (
    <section className="relative w-full h-96 overflow-hidden flex items-center justify-start px-6 md:px-20">
      <Image
        src={img}
        alt="blog header image"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full min-h-full opacity-15 z-0"
      />
      <motion.h1
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="z-10 text-6xl text-gray-800 font-bold"
      >
        {language("Blog", "المدونة")}
      </motion.h1>
    </section>
  );
};

export default BlogHeader;
