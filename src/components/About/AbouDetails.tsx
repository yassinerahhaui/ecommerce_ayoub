"use client";
import Image from "next/image";
import DetailImage from "../../assets/images/cosmetics/cream.png";
import { h4Style } from "../Contact/ContactDetails";
import firstImage from "../../assets/images/products/11.jpg";
import secondImageImage from "../../assets/images/products/12.jpg";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AboutDetails {
  header_welcome: string;
  about_title: string;
  about_desc: string;
}

const logoVariant = {
  startIn: { y: -100, opacity: 0 },
  animateTo: { y: 0, opacity: 1, transition: { duration: 1 } },
};
const titleVariant = {
  startIn: { x: -100, opacity: 0 },
  animateTo: { x: 0, opacity: 1, transition: { duration: 1 } },
};
const descVariant = {
  startIn: { y: 100, opacity: 0 },
  animateTo: { y: 0, opacity: 1, transition: { duration: 1 } },
};
const imgVariant = {
  startIn: { scale: 0 },
  animateTo: { scale: 1, transition: { duration: 1 } },
};

const AbouDetails = ({
  header_welcome,
  about_title,
  about_desc,
}: AboutDetails) => {
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
  // title animation
  const descControllers = useAnimation();
  const [descRef, descInView] = useInView();
  useEffect(() => {
    descInView ? descControllers.start("animateTo") : "";
  }, [descInView, descControllers]);
  // title animation
  const imgControllers = useAnimation();
  const [imgRef, imgInView] = useInView();
  useEffect(() => {
    imgInView ? imgControllers.start("animateTo") : "";
  }, [imgInView, imgControllers]);
  return (
    <div className="max-w-[90rem] m-auto p-6 lg:px-20 grid lg:grid-cols-3 sm:grid-cols-2 gap-8 place-content-center">
      <div className="h-full grid place-content-center lg:col-span-1  ">
        <Image src={DetailImage} alt="Details-image " />
      </div>
      <div className="lg:col-span-2 grid lg:grid-cols-3 gap-10  ">
        <div className=" flex flex-col justify-center items-start gap-3 lg:col-span-2 ">
          <motion.span
            ref={logoRef}
            initial="startIn"
            animate={logoControllers}
            variants={logoVariant}
            className="bg-primary-light block w-[2.47438rem] h-[0.125rem]"
          ></motion.span>
          <motion.h4
            ref={logoRef}
            initial="startIn"
            animate={logoControllers}
            variants={logoVariant}
            className={h4Style}
          >
            {header_welcome}
          </motion.h4>
          <motion.h3
            ref={titleRef}
            initial="startIn"
            animate={titleControllers}
            variants={titleVariant}
            className="text-[#222] font-bold text-4xl  text-left "
          >
            {about_title}
          </motion.h3>

          <motion.p
            ref={descRef}
            initial="startIn"
            animate={descControllers}
            variants={descVariant}
            className="text-text-light font-normal mb-7 text-justify lg:[column-count:2] "
          >
            {about_desc}
          </motion.p>
        </div>
        <div className="grid gap-3 lg:grid-cols-1 sm:grid-cols-2  place-content-center">
          <motion.div
            ref={imgRef}
            initial="startIn"
            animate={imgControllers}
            variants={imgVariant}
            className="overflow-hidden"
          >
            <Image
              alt="First-image"
              className="w-60 h-60 rounded lg:w-full lg:max-h-96"
              src={firstImage}
            />
          </motion.div>
          <motion.div
            ref={imgRef}
            initial="startIn"
            animate={imgControllers}
            variants={imgVariant}
            className="overflow-hidden"
          >
            <Image
              alt="second-image"
              className="w-60 h-60 rounded lg:w-full lg:max-h-96"
              src={secondImageImage}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AbouDetails;
