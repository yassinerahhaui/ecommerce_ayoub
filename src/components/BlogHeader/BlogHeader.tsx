"use client";
import img from "@/assets/images/blog-header.jpg";

import Image from "next/image";

const BlogHeader = () => {
  return (
    <section className="relative w-full h-96 overflow-hidden flex items-center justify-start px-6 md:px-20">
      <Image
        src={img}
        alt="blog header image"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full min-h-full opacity-15 z-0"
      />
      <h1 className="z-10 text-6xl text-gray-800 font-bold">Blog</h1>
    </section>
  );
};

export default BlogHeader;
