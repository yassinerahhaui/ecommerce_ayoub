import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from "@/navigation";
import Image from "next/image";
import { language, currency } from "@/elements/GlobalFunc";
import { productCard } from "@/interfaces/productCard";

const productVariant = {
  startIn: { scale: 0, opacity: 0 },
  animateTo: { scale: 1, opacity: 1, transition: { duration: 1 } },
};

const ProductCard = ({
  data,
  add_to_cart,
  sale,
}: {
  data: productCard;
  add_to_cart: string;
  sale: string;
}) => {
  const pr = data;
  const controllers = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controllers.start("animateTo");
    }
  }, [inView, controllers]);
  return (
    <motion.div
      ref={ref}
      initial="startIn"
      animate={controllers}
      variants={productVariant}
      key={pr.id}
      className="relative mb-2"
    >
      <Link href={`/store/${pr.id}`}>
        {pr.old_price ? (
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
          <h3 className="text-md sm:text-lg font-semibold text-gray-900 my-2 whitespace-nowrap w-full overflow-x-hidden">
            {language(pr.name_fr, pr.name_ar)}
          </h3>
          <h4 className="text-md text-gray-500 font-medium mb-2">
            {pr.old_price ? (
              <span className="line-through font-normal text-gray-400">
                {currency(`${pr.old_price}`)}
              </span>
            ) : (
              ""
            )}{" "}
            {currency(`${pr.price}`)}
          </h4>
        </div>
      </Link>
      {/* <button className="border-b mx-auto block border-gray-500 text-gray-500 hover:text-gray-800 hover:border-gray-800 text-sm sm:text-md font-medium cursor-pointer select-none">
        {add_to_cart}
      </button> */}
    </motion.div>
  );
};

export default ProductCard;
