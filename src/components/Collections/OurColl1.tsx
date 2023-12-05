"use client";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import img3 from "@/assets/images/collections/3.jpg";
import { language } from "@/elements/GlobalFunc";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const coll1 = {
  id: 1,
  name_fr: "La collection Radiant Glow",
  name_ar: "مجموعة التوهج المشع",
  desc_fr:
    "Embrassez votre éclat intérieur avec notre collection Radiant Glow. Cette collection propose des produits qui vous aideront à obtenir un teint sain et lumineux. La collection comprend un nettoyant, un tonique, un sérum, une crème hydratante et un masque.",
  desc_ar:
    "احتضن إشراقك الداخلي مع مجموعة Radiant Glow الخاصة بنا. تحتوي هذه المجموعة على منتجات ستساعدك على الحصول على بشرة صحية ومشرقة. تحتوي المجموعة على منظف وتونر وسيروم ومرطب وقناع.",
  image: img3,
};
const borderVariant = {
  startIn: { x: -100, opacity: 0 },
  animateTo: { x: 0, opacity: 1, transition: { duration: 1 } },
};
const descVariant = {
  startIn: { y: 100, opacity: 0 },
  animateTo: { y: 0, opacity: 1, transition: { duration: 1 } },
};
const imageVariant = {
  startIn: { scale: 0 },
  animateTo: { scale: 1, transition: { duration: 1 } },
};
const logoVariant = {
  startIn: { y: -100, opacity: 0 },
  animateTo: { y: 0, opacity: 1, transition: { duration: 1 } },
};
const titleVariant = {
  startIn: { x: 100, opacity: 0 },
  animateTo: { x: 0, opacity: 1, transition: { duration: 1 } },
};
const linkVariant = {
  startIn: { y: 100, opacity: 0 },
  animateTo: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const OurColl1 = ({ browse_all }: { browse_all: string }) => {
  const lang = localStorage.getItem("language");
  // border animation
  const borderControllers = useAnimation();
  const [borderRef, borderInView] = useInView();
  useEffect(() => {
    if (borderInView) {
      borderControllers.start("animateTo");
    }
  }, [borderControllers, borderInView]);
  // description animation
  const descControllers = useAnimation();
  const [descRef, descInView] = useInView();
  useEffect(() => {
    if (descInView) {
      descControllers.start("animateTo");
    }
  }, [descInView, descControllers]);
  // image animation
  const imgControllers = useAnimation();
  const [imgRef, imgInView] = useInView();
  useEffect(() => {
    if (imgInView) {
      imgControllers.start("animateTo");
    }
  }, [imgInView, imgControllers]);
  // logo animation
  const logoControllers = useAnimation();
  const [logoRef, logoInView] = useInView();
  useEffect(() => {
    logoInView ? logoControllers.start("animateTo") : "";
  }, [logoInView, logoControllers]);
  // title animation
  const titleControllers = useAnimation();
  const [titleRef, titleInView] = useInView();
  useEffect(() => {
    titleInView ? titleControllers.start("animateTo") : "";
  }, [titleInView, titleControllers]);
  // link animation
  const linkControllers = useAnimation();
  const [linkRef, linkInView] = useInView();
  useEffect(() => {
    linkInView ? linkControllers.start("animateTo") : "";
  }, [linkInView, linkControllers]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 md:py-4 md:px-20 gap-4">
      <article className="flex flex-col justify-center items-start">
        <motion.div
          ref={borderRef}
          initial="startIn"
          animate={borderControllers}
          variants={borderVariant}
          className="w-20 border mb-4 border-primary"
        ></motion.div>
        <motion.p
          ref={descRef}
          initial="startIn"
          animate={descControllers}
          variants={descVariant}
          className="text-sm font-medium text-gray-800"
        >
          {language(coll1.desc_fr, coll1.desc_ar)}
        </motion.p>
      </article>
      <motion.div
        ref={imgRef}
        initial="startIn"
        animate={imgControllers}
        variants={imageVariant}
        className="overflow-hidden"
      >
        <Image
          src={coll1.image}
          alt={language(coll1.name_fr, coll1.name_ar)}
          title={language(coll1.name_fr, coll1.name_ar)}
          className="w-full rounded"
        />
      </motion.div>
      <article className="flex flex-col justify-center items-start">
        <motion.h4
          ref={logoRef}
          initial="startIn"
          animate={logoControllers}
          variants={logoVariant}
          className="text-md font-semibold text-primary tracking-wider"
        >
          YRSHOP
        </motion.h4>
        <motion.h3
          ref={titleRef}
          initial="startIn"
          animate={titleControllers}
          variants={titleVariant}
          className="text-xl text-gray-800 font-semibold my-2"
        >
          {language(coll1.name_fr, coll1.name_ar)}
        </motion.h3>
        <motion.div
          ref={linkRef}
          initial="startIn"
          animate={linkControllers}
          variants={linkVariant}
          className=""
        >
          <Link
            href={`collection/${coll1.id}`}
            className="flex justify-start items-center text-sm font-semibold text-gray-900"
          >
            <span className="pe-1" id="browse_all">
              {browse_all}{" "}
            </span>{" "}
            {lang === "fr" ? <FaLongArrowAltRight /> : <FaLongArrowAltLeft />}
          </Link>
        </motion.div>
      </article>
    </div>
  );
};

export default OurColl1;
