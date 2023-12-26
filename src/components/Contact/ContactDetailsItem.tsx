"use client";
import { language } from "@/elements/GlobalFunc";
import { h4Style } from "./ContactDetails";
import { ContactInfoInterface } from "@/interfaces/contact";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const itemVariant = {
  startIn: { scale: 0 },
  animateTo: { scale: 1, transition: { duration: 1 } },
};

const ContactDetailsItem = ({ data }: { data: ContactInfoInterface }) => {
  const controllers = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    inView ? controllers.start("animateTo") : "";
  }, [inView, controllers]);
  // p tag style
  const PStyle = "text-[#222] font-light text-xl text-center sm:text-start";
  return (
    <motion.li
      ref={ref}
      initial="startIn"
      animate={controllers}
      variants={itemVariant}
      className="flex flex-col md:gap-3 overflow-hidden"
    >
      <h4 className={h4Style}>{language(data.title_fr, data.title_ar)}</h4>
      {data.list.map((el) => (
        <p className={PStyle}>{language(el.item_fr, el.item_ar)}</p>
      ))}
    </motion.li>
  );
};

export default ContactDetailsItem;
