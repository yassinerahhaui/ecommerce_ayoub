"use client";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

const h5_variant = {
  startIn: { y: 100, opacity: 0 },
  animateTo: { y: 0, opacity: 1, transition: { duration: 1 } },
};
const h3_variant = {
  startIn: { y: "-100%", opacity: 0 },
  animateTo: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const OurCollHeader = () => {
  const t = useTranslations("Index");
  const controllers = useAnimation();
  const [ref, inView] = useInView();
  const controllers1 = useAnimation();
  const [ref1, inView1] = useInView();
  useEffect(() => {
    if (inView) {
      controllers.start("animateTo");
    }
  }, [controllers, inView]);
  useEffect(() => {
    if (inView1) {
      controllers1.start("animateTo");
    }
  }, [controllers1, inView1]);
  return (
    <header>
      <motion.div
        ref={ref}
        initial="startIn"
        animate={controllers}
        variants={h5_variant}
        className="w-10 mx-auto my-2 border border-primary"
      ></motion.div>
      <motion.h5
        ref={ref}
        initial="startIn"
        animate={controllers}
        variants={h5_variant}
        className="text-center text-md font-bold text-primary"
      >
        {t("best_collection")}
      </motion.h5>
      <motion.h3
        ref={ref1}
        initial="startIn"
        animate={controllers1}
        variants={h3_variant}
        className="text-center text-5xl font-bold my-4"
      >
        {t("our_collection")}
      </motion.h3>
    </header>
  );
};

export default OurCollHeader;
