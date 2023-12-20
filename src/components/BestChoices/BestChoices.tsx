"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "@/data/bestchoices";
import { Title } from "@/interfaces/bestchoices";

const headerVariant = {
  startIn: { scale: 0, y: 100, opacity: 0 },
  animateTo: { scale: 1, y: 0, opacity: 1, transition: { duration: 1 } },
};

const BestChoices = ({
  best_choices,
  popular_products,
  add_to_cart,
  sale,
}: Title) => {
  const controlers = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controlers.start("animateTo");
    }
  }, [controlers, inView]);
  return (
    <>
      <section className="mb-16">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-10 py-4 px-6 md:px-20">
          {products.map((pr) => {
            if (pr.in_stock) {
              return (
                <ProductCard
                  key={pr.id}
                  data={pr}
                  add_to_cart={add_to_cart}
                  sale={sale}
                />
              );
            }
          })}
        </div>
      </section>
    </>
  );
};

export default BestChoices;
