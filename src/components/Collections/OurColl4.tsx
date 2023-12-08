"use client";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { language } from "@/elements/GlobalFunc";
import img6 from "@/assets/images/collections/7.jpg";
import cream from "@/assets/images/cream.png";

const coll4 = {
  id: 1,
  name_fr: "The Bold Lip Collection",
  name_ar: "مجموعة الشفاه الجريئة",
  desc_fr:
    "Make a statement with our Bold Lip Collection. This collection features lipsticks, lip glosses, and lip liners in a variety of bold, vibrant colors.",
  desc_ar:
    "أدلي ببيان مع مجموعة Bold Lip Collection. تتميز هذه المجموعة بأحمر الشفاه وملمع الشفاه وأقلام تحديد الشفاه بمجموعة متنوعة من الألوان الجريئة والنابضة بالحياة.",
  image: img6,
};
const box1Variant = {
  startIn: { x: 200, opacity: 0 },
  animateTo: { x: 0, opacity: 1, transition: { duration: 1 } },
};
const box2Variant = {
  startIn: { x: -200, opacity: 0 },
  animateTo: { x: 0, opacity: 1, transition: { duration: 1 } },
};
const imgVariant = {
  startIn: { x: -200, opacity: 0 },
  animateTo: { x: 0, opacity: 1, transition: { duration: 1 } },
};
const logoVariant = {
  startIn: { y: -200, opacity: 0 },
  animateTo: { y: 0, opacity: 1, transition: { duration: 1 } },
};
const nameVariant = {
  startIn: { x: 200, opacity: 0 },
  animateTo: { x: 0, opacity: 1, transition: { duration: 1 } },
};
const descVariant = {
  startIn: { y: 100, opacity: 0 },
  animateTo: { y: 0, opacity: 1, transition: { duration: 1 } },
};
const linkVariant = {
  startIn: { y: 100, opacity: 0 },
  animateTo: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const OurColl4 = ({
  view_more,
  masque,
  palette,
}: {
  view_more: string;
  masque: string;
  palette: string;
}) => {
  // box1 animation
  const box1Controllers = useAnimation();
  const [box1Ref, box1InView] = useInView();
  useEffect(() => {
    box1InView ? box1Controllers.start("animateTo") : "";
  }, [box1InView, box1Controllers]);
  // box2 animation
  const box2Controllers = useAnimation();
  const [box2Ref, box2InView] = useInView();
  useEffect(() => {
    box2InView ? box2Controllers.start("animateTo") : "";
  }, [box2InView, box2Controllers]);
  // image animation
  const imgControllers = useAnimation();
  const [imgRef, imgInView] = useInView();
  useEffect(() => {
    imgInView ? imgControllers.start("animateTo") : "";
  }, [imgInView, imgControllers]);
  // logo animation
  const logoControllers = useAnimation();
  const [logoRef, logoInView] = useInView();
  useEffect(() => {
    logoInView ? logoControllers.start("animateTo") : "";
  }, [logoInView, logoControllers]);
  // name animation
  const nameControllers = useAnimation();
  const [nameRef, nameInView] = useInView();
  useEffect(() => {
    nameInView ? nameControllers.start("animateTo") : "";
  }, [nameInView, nameControllers]);
  // description animation
  const descControllers = useAnimation();
  const [descRef, descInView] = useInView();
  useEffect(() => {
    descInView ? descControllers.start("animateTo") : "";
  }, [descInView, descControllers]);
  // link animation
  const linkControllers = useAnimation();
  const [linkRef, linkInView] = useInView();
  useEffect(() => {
    linkInView ? linkControllers.start("animateTo") : "";
  }, [linkInView, linkControllers]);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20 my-6">
      <motion.div
        ref={imgRef}
        initial="startIn"
        animate={imgControllers}
        variants={imgVariant}
        className="rounded overflow-hidden"
      >
        <Image src={coll4.image} alt={language(coll4.name_fr, coll4.name_ar)} />
      </motion.div>
      <article className="flex flex-col justify-center">
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
          ref={nameRef}
          initial="startIn"
          animate={nameControllers}
          variants={nameVariant}
          className="text-xl text-gray-800 font-semibold my-4"
        >
          {language(coll4.name_fr, coll4.name_ar)}
        </motion.h3>
        <motion.p
          ref={descRef}
          initial="startIn"
          animate={descControllers}
          variants={descVariant}
          className="text-sm font-medium text-gray-800"
        >
          {language(coll4.desc_fr, coll4.desc_ar)}
        </motion.p>
        <motion.div
          ref={linkRef}
          initial="startIn"
          animate={linkControllers}
          variants={linkVariant}
          className=""
        >
          <Link
            href={""}
            className="text-xs font-semibold text-gray-900 mt-2 tracking-widest hover:underline"
          >
            {view_more}
          </Link>
        </motion.div>
      </article>
      <div className="flex flex-col justify-center items-start">
        <motion.div
          ref={box1Ref}
          initial="startIn"
          animate={box1Controllers}
          variants={box1Variant}
          className="flex items-center w-full border-b-4 cursor-pointer border-primary pb-4 mb-4"
        >
          <Image src={cream} alt="cream icon image" width={40} height={40} />
          <h3 className="text-xl font-bold p-3 w-full md:w-max text-center md:text-start">
            {masque}
          </h3>
        </motion.div>
        <motion.div
          ref={box2Ref}
          initial="startIn"
          animate={box2Controllers}
          variants={box2Variant}
          className="flex items-center w-full border-b-4 cursor-pointer border-primary pb-4 mb-4"
        >
          <Image src={cream} alt="cream icon image" width={40} height={40} />
          <h3 className="text-xl font-bold p-3 w-full md:w-max text-center md:text-start">
            {palette}
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default OurColl4;
