"use client";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import image1 from "@/assets/images/collections/1.jpg";
import image2 from "@/assets/images/collections/2.jpg";
import Link from "next-intl/link";
import { currency, language } from "@/elements/GlobalFunc";

const collections_img = [
  {
    id: 1,
    img: image1,
    name_fr: "Collection 1",
    name_ar: "المجموعة 1",
    price: "32.50",
  },
  {
    id: 2,
    img: image2,
    name_fr: "Collection 2",
    name_ar: "المجموعة 2",
    price: "22.99",
  },
];
const collection_variant = {
  start_var: { opacity: 0 },
  animate_var: { opacity: 1, transition: { duration: 1 } },
};

const Collections = ({ browse_collection }: { browse_collection: string }) => {
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
            className="relative overflow-hidden rounded [text-shadow:0_0_.07rem_#888888c5,0_0_.07rem_#888888c5]"
          >
            <Image
              src={el.img}
              alt={language(el.name_fr, el.name_ar)}
              className="z-0 w-full h-full hover:scale-105 transition-all ease-in-out duration-[1.5s]"
            />
            <h3 className="z-10 absolute top-6 start-6 text-md md:text-xl font-bold">
              {language(el.name_fr, el.name_ar)}
            </h3>
            <span className="z-10 absolute top-6 end-6 text-md md:text-lg font-semibold">
              {currency(el.price)}
            </span>
            <h3 className="z-10 absolute underline bottom-6 start-6 text-md font-semibold">
              <Link href={`/collection/${el.id}`}>{browse_collection}</Link>
            </h3>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Collections;
