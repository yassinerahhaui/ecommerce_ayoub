"use client";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { language } from "@/elements/GlobalFunc";
import img4 from "@/assets/images/collections/4.jpg";
const coll2 = {
  id: 1,
  name_fr: "The Flawless Finish Collection",
  name_ar: "مجموعة اللمسات النهائية الخالية من العيوب",
  desc_fr:
    "Achieve a flawless finish with our Flawless Finish Collection. This collection features products that will help you create a smooth, even complexion. The collection includes a primer, foundation, concealer, powder, and setting spray.",
  desc_ar:
    "احصلي على لمسة نهائية خالية من العيوب مع مجموعة Flawless Finish. تحتوي هذه المجموعة على منتجات ستساعدك على الحصول على بشرة ناعمة ومتجانسة. تتضمن المجموعة كريم الأساس، وكريم الأساس، والكونسيلر، والبودرة، ورذاذ التثبيت.",
  image: img4,
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
  startIn: { y: 200, opacity: 0 },
  animateTo: { y: 0, opacity: 1, transition: { duration: 1 } },
};
const linkVariant = {
  startIn: { y: 200, opacity: 0 },
  animateTo: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const OurColl2 = ({ view_more }: { view_more: string }) => {
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
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      <motion.div
        ref={imgRef}
        initial="startIn"
        animate={imgControllers}
        variants={imgVariant}
        className="overflow-hidden rounded"
      >
        <Image src={coll2.image} alt={language(coll2.name_fr, coll2.name_ar)} />
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
          {language(coll2.name_fr, coll2.name_ar)}
        </motion.h3>
        <motion.p
          ref={descRef}
          initial="startIn"
          animate={descControllers}
          variants={descVariant}
          className="text-sm font-medium text-gray-800"
        >
          {language(coll2.desc_fr, coll2.desc_ar)}
        </motion.p>
        <motion.div
          ref={linkRef}
          initial="startIn"
          animate={linkControllers}
          variants={linkVariant}
          className=""
        >
          <Link
            href={`collection/${coll2.id}`}
            className="text-xs font-semibold text-gray-900 mt-2 tracking-widest hover:underline"
          >
            {view_more}
          </Link>
        </motion.div>
      </article>
    </section>
  );
};

export default OurColl2;
