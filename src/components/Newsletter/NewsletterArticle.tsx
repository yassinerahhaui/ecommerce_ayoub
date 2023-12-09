"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface NewsletterArticleI {
  get_update: string;
  newsletter: string;
  newsletter_desc: string;
}

const articleVariant = {
  startIn: { scale: 0 },
  animateTo: { scale: 1, transition: { duration: 1 } },
};
const NewsletterArticle = ({
  get_update,
  newsletter,
  newsletter_desc,
}: NewsletterArticleI) => {
  const controllers = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    inView ? controllers.start("animateTo") : "";
  }, [inView, controllers]);
  return (
    <motion.article
      ref={ref}
      initial="startIn"
      animate={controllers}
      variants={articleVariant}
      className="flex flex-col w-full justify-center items-start overflow-hidden"
    >
      <div className="">
        <div className="w-8 border border-primary"></div>
        <h4 className="text-sm text-primary font-semibold my-2">
          {get_update}
        </h4>
        <h3 className="text-4xl md:text-5xl my-3 md:my-6 text-gray-800 font-bold">
          {newsletter}
        </h3>
      </div>
      <p className="text-sm text-gray-400 mt-4">{newsletter_desc}</p>
    </motion.article>
  );
};

export default NewsletterArticle;
