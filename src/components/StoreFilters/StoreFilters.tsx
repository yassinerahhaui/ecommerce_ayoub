"use client";
import { useContext } from "react";
import { StoreContext } from "@/contexts/StoreContext";

const StoreFilters = () => {
  const context = useContext(StoreContext);
  const inputStyle =
    "block py-1 px-3 my-2 rounded text-lg font-semibold w-full border border-gray-400";
  return (
    <form method="POST" className="">
      <input
        type="search"
        name="name"
        id="name"
        placeholder="Search by name..."
        className={`${inputStyle}`}
        onChange={(e) => context?.setName(e.target.value)}
        autoComplete="off"
      />
      <input
        type="number"
        name="price_more_than"
        id="price_more_than"
        placeholder="Price more than..."
        className={`${inputStyle}`}
        autoComplete="off"
        max={1000000}
        min={0}
      />
      <input
        type="number"
        name="price_less_than"
        id="price_less_than"
        placeholder="Price less then..."
        className={`${inputStyle}`}
        autoComplete="off"
        max={1000000}
        min={0}
      />
    </form>
  );
};

export default StoreFilters;
