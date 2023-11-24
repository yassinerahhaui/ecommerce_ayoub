"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
interface Title {
  best_choices: string;
  popular_products: string;
}
const headerVariant = {
  startIn: { scale: 0, y: 100, opacity: 0 },
  animateTo: { scale: 1, y: 0, opacity: 1, transition: { duration: 1 } },
};
const products = [];
const BestChoices = ({ best_choices, popular_products }: Title) => {
  const controlers = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controlers.start("animateTo");
    }
  }, [controlers, inView]);
  return (
    <>
      <section className="mb-32">
        <motion.div
          ref={ref}
          initial="startIn"
          animate={controlers}
          variants={headerVariant}
          className="w-10 mx-auto my-2 border border-primary"
        ></motion.div>
        <motion.h4
          ref={ref}
          initial="startIn"
          animate={controlers}
          variants={headerVariant}
          className="text-center text-md font-bold text-primary"
        >
          {best_choices}
        </motion.h4>
        <motion.h3
          ref={ref}
          initial="startIn"
          animate={controlers}
          variants={headerVariant}
          className="text-center text-5xl font-bold my-4"
        >
          {popular_products}
        </motion.h3>
      </section>
    </>
  );
};

export default BestChoices;
