"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FormNewsletter {
  name: string;
  email: string;
  send: string;
}

const formVariant = {
  startIn: { x: 200, opacity: 0 },
  animateTo: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const NewsletterForm = ({ name, email, send }: FormNewsletter) => {
  const controllers = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    inView ? controllers.start("animateTo") : "";
  }, [inView, controllers]);
  const labelStyle = "font-semibold text-gray-800 mb-1 block";
  const inputStyle =
    "block w-full rounded py-2 px-4 mb-4 border border-gray-300 focus:outline-none focus:border-gray-400";
  return (
    <motion.form
      ref={ref}
      initial="startIn"
      animate={controllers}
      variants={formVariant}
      className="block"
    >
      <label htmlFor="name" className={`${labelStyle}`}>
        {name}
      </label>
      <input type="text" name="name" id="name" className={`${inputStyle}`} />
      <label htmlFor="email" className={`${labelStyle}`}>
        {email}
      </label>
      <input type="email" name="email" id="email" className={`${inputStyle}`} />
      <button
        type="submit"
        className="text-white bg-primary hover:bg-primary-dark rounded text-lg py-2 px-5 cursor-pointer select-none"
      >
        {send}
      </button>
    </motion.form>
  );
};

export default NewsletterForm;
