"use client";

import { currency, language } from "@/elements/GlobalFunc";
import { DetailsInterface } from "./ProductHeader";
import { useState } from "react";

const Details = ({ header }: { header: DetailsInterface }) => {
  const inputStyle = "border border-gray-400 rounded block w-full p-2 mb-2";
  const [quantity, setQuantity] = useState(1);
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
      <button className="my-3 cursor-pointer w-full rounded py-2 text-center bg-primary text-white font-semibold hover:bg-primary-dark">
        Buy Now
      </button>
      <form action="" method="post" className="hidden">
        <input
          type="text"
          name="name"
          className={inputStyle}
          placeholder="name..."
        />
        <input
          type="tel"
          name="phone"
          className={inputStyle}
          placeholder="phone..."
        />
        <input
          type="text"
          name="city"
          className={inputStyle}
          placeholder="city..."
        />
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="range"
          name="quantity"
          id="quantity"
          className={inputStyle}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          defaultValue={1}
          min={1}
          max={header.quantity}
        />
        <span className="">{quantity}</span>
        <textarea
          name="address"
          placeholder="address..."
          className={inputStyle}
        ></textarea>
        <button type="submit" className="">
          COMMANDER
        </button>
      </form>
    </article>
  );
};

export default Details;
