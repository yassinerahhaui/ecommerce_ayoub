"use client";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import image1 from "@/assets/images/collections/1.jpg";
import image2 from "@/assets/images/collections/2.jpg";

const collections_img = [
  {
    id: 1,
    img: image1,
    name: "Collection 1",
    price: "32.50",
  },
  {
    id: 2,
    img: image2,
    name: "Collection 2",
    price: "22.99",
  },
];
const collection_variant = {
  start_var: { opacity: 0 },
  animate_var: { opacity: 1, transition: { duration: 1 } },
};

const Collections = () => {
  const controlers = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controlers.start("animate_var");
    }
  }, [controlers, inView]);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
      {collections_img.map((el) => {
        return (
          <motion.div
            ref={ref}
            initial="start_var"
            animate={controlers}
            variants={collection_variant}
            key={el.id}
            className="relative overflow-hidden rounded"
          >
            <Image
              src={el.img}
              alt={el.name}
              className="z-0 w-full h-full hover:scale-105 transition-all ease-in-out duration-[1.5s]"
            />
            <h3 className="z-10 absolute top-6 start-6 text-xl font-bold">
              {el.name}
            </h3>
            <span className="z-10 absolute top-6 end-6 font-semibold">
              FROM: {el.price} €
            </span>
            <h3 className="z-10 absolute bottom-6 start-6">{el.name}</h3>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Collections;
