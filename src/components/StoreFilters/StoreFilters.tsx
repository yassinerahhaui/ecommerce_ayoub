"use client";
import { useContext } from "react";
import { StoreContext } from "@/contexts/StoreContext";
import { Slider } from "@nextui-org/slider";
import { language } from "@/elements/GlobalFunc";

export type SliderValue = number | number[];

const StoreFilters = () => {
  const context = useContext(StoreContext);
  const inputStyle =
    "block py-1 px-3 my-4 rounded text-lg font-semibold w-full border border-gray-400";
  return (
    <div className="">
      <h3 className="text-2xl text-gray-800 text-center font-semibold">
        {language("FILTRES", "تصفية")}
      </h3>
      <input
        type="search"
        name="name"
        id="name"
        placeholder={language("Nom...", "الإسم...")}
        className={`${inputStyle}`}
        onChange={(e) => context?.setName(e.target.value)}
        autoComplete="off"
      />
      <Slider
        label={language("Prix", "الثمن")}
        step={1}
        radius="full"
        size="sm"
        minValue={0}
        maxValue={localStorage.getItem("currency") === "eur" ? 1000 : 10000}
        defaultValue={[
          0,
          localStorage.getItem("currency") === "eur" ? 1000 : 10000,
        ]}
        onChange={(v1: SliderValue) => context?.setPrice(v1)}
        formatOptions={{
          style: "currency",
          currency: `${localStorage.getItem("currency")}`,
        }}
        className="max-w-full"
      />
      <p className="text-lg">
        {`${context?.price}`.split(",")[0]},{`${context?.price}`.split(",")[1]}
      </p>
    </div>
  );
};

export default StoreFilters;
