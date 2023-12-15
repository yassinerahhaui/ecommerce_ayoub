"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ArticleHeader {
  from_our_blog: string;
  latest_article: string;
  home_blog_desc: string;
}
const ourBlogVariant = {
  startIn: { y: -100, opacity: 0 },
  animateTo: { y: 0, opacity: 1, transition: { duration: 1 } },
};
const titleVariant = {
  startIn: { x: -150, opacity: 0 },
  animateTo: { x: 0, opacity: 1, transition: { duration: 1 } },
};
const descVariant = {
  startIn: { y: 100, opacity: 0 },
  animateTo: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const HomeBlogHeader = ({
  from_our_blog,
  latest_article,
  home_blog_desc,
}: ArticleHeader) => {
  const ourBlogControllers = useAnimation();
  const [ourBlogRef, ourBloginView] = useInView();
  useEffect(() => {
    ourBloginView ? ourBlogControllers.start("animateTo") : "";
  }, [ourBloginView, ourBlogControllers]);
  // title animation
  const titleControllers = useAnimation();
  const [titleRef, titleinView] = useInView();
  useEffect(() => {
    titleinView ? titleControllers.start("animateTo") : "";
  }, [titleinView, titleControllers]);
  // desc animation
  const descControllers = useAnimation();
  const [descRef, descinView] = useInView();
  useEffect(() => {
    descinView ? descControllers.start("animateTo") : "";
  }, [descinView, descControllers]);
  return (
    <>
      <motion.div
        ref={ourBlogRef}
        initial="startIn"
        animate={ourBlogControllers}
        variants={ourBlogVariant}
        className=""
      >
        <div className="w-8 border border-primary mb-2"></div>
        <h5 className="text-primary text-md font-semibold">{from_our_blog}</h5>
      </motion.div>
      <motion.h2
        ref={titleRef}
        initial="startIn"
        animate={titleControllers}
        variants={titleVariant}
        className="text-6xl font-bold text-gray-800 my-4"
      >
        {latest_article}
      </motion.h2>
      <motion.p
        ref={descRef}
        initial="startIn"
        animate={descControllers}
        variants={descVariant}
        className="text-sm text-gray-400 mb-6"
      >
        {home_blog_desc}
      </motion.p>
    </>
  );
};

export default HomeBlogHeader;
