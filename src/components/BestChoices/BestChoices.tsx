"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { currency, language } from "@/elements/GlobalFunc";
import img1 from "@/assets/images/products/01.jpg";
import img2 from "@/assets/images/products/02.jpg";
import img3 from "@/assets/images/products/03.jpg";
import img4 from "@/assets/images/products/04.jpg";
import img5 from "@/assets/images/products/05.jpg";
import img6 from "@/assets/images/products/06.jpg";
import img7 from "@/assets/images/products/07.jpg";
import img8 from "@/assets/images/products/08.jpg";
import img9 from "@/assets/images/products/09.jpg";
import img10 from "@/assets/images/products/10.jpg";
import Image from "next/image";
import Link from "next-intl/link";
interface Title {
  best_choices: string;
  popular_products: string;
  add_to_cart: string;
  sale: string;
}
const headerVariant = {
  startIn: { scale: 0, y: 100, opacity: 0 },
  animateTo: { scale: 1, y: 0, opacity: 1, transition: { duration: 1 } },
};

const products = [
  {
    id: 1,
    name_fr: "produit numero 1",
    name_ar: "المنتج رقم 1",
    price: 40,
    old_price: 45,
    sale: false,
    in_stock: true,
    image: img1,
  },
  {
    id: 2,
    name_fr: "produit numero 2",
    name_ar: "المنتج رقم 2",
    price: 99.99,
    old_price: 250,
    sale: true,
    in_stock: true,
    image: img2,
  },
  {
    id: 3,
    name_fr: "produit numero 3",
    name_ar: "المنتج رقم 3",
    price: 22.5,
    old_price: 45.99,
    sale: true,
    in_stock: true,
    image: img3,
  },
  {
    id: 4,
    name_fr: "produit numero 4",
    name_ar: "المنتج رقم 4",
    price: 9,
    old_price: 15,
    sale: true,
    in_stock: true,
    image: img4,
  },
  {
    id: 5,
    name_fr: "produit numero 5",
    name_ar: "المنتج رقم 5",
    price: 12.35,
    old_price: 65,
    sale: true,
    in_stock: true,
    image: img5,
  },
  {
    id: 6,
    name_fr: "produit numero 6",
    name_ar: "المنتج رقم 6",
    price: 16.5,
    old_price: 45,
    sale: true,
    in_stock: true,
    image: img6,
  },
  {
    id: 7,
    name_fr: "produit numero 7",
    name_ar: "المنتج رقم 7",
    price: 15,
    old_price: 27.99,
    sale: true,
    in_stock: true,
    image: img7,
  },
  {
    id: 8,
    name_fr: "produit numero 8",
    name_ar: "المنتج رقم 8",
    price: 30,
    old_price: 40,
    sale: true,
    in_stock: true,
    image: img8,
  },
  {
    id: 9,
    name_fr: "produit numero 9",
    name_ar: "المنتج رقم 9",
    price: 15,
    old_price: 27.99,
    sale: true,
    in_stock: true,
    image: img9,
  },
  {
    id: 10,
    name_fr: "produit numero 10",
    name_ar: "المنتج رقم 10",
    price: 30,
    old_price: 40,
    sale: true,
    in_stock: true,
    image: img10,
  },
];
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-10 py-4 px-6 md:px-20">
          {products.map((pr) => {
            if (pr.in_stock) {
              return (
                <div key={pr.id} className="relative">
                  <Link href={`/store/${pr.id}`}>
                    {pr.sale ? (
                      <span className="absolute z-10 text-xs font-bold top-[-10px] right-[-10px] text-white bg-gray-600 rounded-full p-2">
                        {sale}
                      </span>
                    ) : (
                      ""
                    )}
                    <div className="w-full z-0 rounded h-48 sm:h-64 overflow-hidden">
                      <Image
                        src={pr.image}
                        alt={language(pr.name_fr, pr.name_ar)}
                        className="w-full h-48 sm:h-64 rounded scale-100 object-cover object-center hover:scale-105 transition-all ease-in-out duration-1000"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-gray-900 my-2">
                        {language(pr.name_fr, pr.name_ar)}
                      </h3>
                      <h4 className="text-md text-gray-500 font-medium mb-2">
                        {pr.sale ? (
                          <span className="line-through text-gray-400">
                            {currency(`${pr.old_price}`)}
                          </span>
                        ) : (
                          ""
                        )}{" "}
                        {currency(`${pr.price}`)}
                      </h4>
                    </div>
                  </Link>
                  <button className="border-b mx-auto block border-gray-500 text-gray-500 hover:text-gray-800 hover:border-gray-800 text-sm sm:text-md font-medium cursor-pointer select-none">
                    {add_to_cart}
                  </button>
                </div>
              );
            }
          })}
        </div>
      </section>
    </>
  );
};

export default BestChoices;
