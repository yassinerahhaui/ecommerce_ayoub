"use client";
import { language } from "@/elements/GlobalFunc";
import { ArticleInterface } from "@/interfaces/blogArticle";
import { Link } from "@/navigation";
import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const imageVariant = {
  startIn: { width: 0 },
  animateTo: { width: "100%", transition: { duration: 1 } },
};
const descVariant = {
  startIn: { x: -150, opacity: 0 },
  animateTo: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const BlogArticleCard = ({
  article,
  view_more,
}: {
  article: ArticleInterface;
  view_more: string;
}) => {
  // image animation
  const imgControllers = useAnimation();
  const [imgRef, imgInView] = useInView();
  useEffect(() => {
    imgInView ? imgControllers.start("animateTo") : "";
  }, [imgInView, imgControllers]);
  // desc animation
  const descControllers = useAnimation();
  const [descRef, descInView] = useInView();
  useEffect(() => {
    descInView ? descControllers.start("animateTo") : "";
  }, [descInView, descControllers]);
  return (
    <article className="w-full rounded min-h-64 overflow-x-hidden">
      <motion.div
        ref={imgRef}
        initial="startIn"
        animate={imgControllers}
        variants={imageVariant}
        className="overflow-hidden"
      >
        <Image
          src={article.image}
          alt="article image"
          className="w-full rounded"
        />
      </motion.div>
      <motion.div
        ref={descRef}
        initial="startIn"
        animate={descControllers}
        variants={descVariant}
        className="overflow-hidden"
      >
        <h4 className="text-gray-800 text-2xl font-semibold line-clamp-2">
          {language(article.name_fr, article.name_ar)}
        </h4>
        <span className="text-sm block text-gray-500 my-2">{article.date}</span>
        <p className="text-gray-800 text-md line-clamp-3">
          {language(article.desc_fr, article.desc_ar)}
        </p>
        <Link
          href={`/blog/${article.id}`}
          className="text-lg text-primary border border-primary rounded hover:text-primary-dark hover:border-primary-dark py-1 px-3 cursor-pointer block w-max h-max mt-2"
        >
          {view_more}
        </Link>
      </motion.div>
    </article>
  );
};

export default BlogArticleCard;
