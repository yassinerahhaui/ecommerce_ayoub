"use client";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";
import {Link} from "@/navigation";
import { currency, language } from "@/elements/GlobalFunc";

interface Collection1 {
  id?: number;
  img: StaticImageData;
  name_fr: string;
  name_ar: string;
  price: string;
}

const collection_variant = {
  start_var: { opacity: 0 },
  animate_var: { opacity: 1, transition: { duration: 1 } },
};

const Collection = ({
  data,
  browse_collection,
}: {
  data: Collection1;
  browse_collection: string;
}) => {
  const controlers = useAnimation();
  const [ref, inView] = useInView();
  const el = data;
  useEffect(() => {
    if (inView) {
      controlers.start("animate_var");
    }
  }, [controlers, inView]);
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
};

export default Collection;
