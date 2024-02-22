"use client";
import { useContext } from "react";
import { currency, language } from "@/elements/GlobalFunc";
import { DetailsInterface } from "./ProductHeader";
import { OrderContext } from "@/contexts/OrderContext";

const Details = ({ header }: { header: DetailsInterface }) => {
  const inputStyle = "border border-gray-400 rounded block w-full p-2 mb-2";
  const dispF = useContext(OrderContext);
  return (
    <article className="">
      <h1 className="text-2xl text-gray-800 font-bold">
        {language(header.name_fr, header.name_ar)}
      </h1>
      <div className="my-3">
        <span className="text-xl text-primary-dark font-semibold">
          {currency(`${header.price}`)}
        </span>
        <span className="text-xl font-semibold text-gray-800">{" / "}</span>
        <span className="text-sm text-gray-500 line-through">
          {currency(` ${header.old_price} `)}
        </span>
      </div>
      <p className="text-sm text-gray-800 font-medium">
        {language(header.desc_fr, header.desc_ar)}
      </p>
      <button
        onClick={() => dispF?.setDisplayForm(true)}
        className="my-3 cursor-pointer w-full rounded py-2 text-center bg-primary text-white font-semibold hover:bg-primary-dark"
      >
        {language("ACHETER MAINTENANT", "اشتري الآن")}
      </button>
    </article>
  );
};

export default Details;
