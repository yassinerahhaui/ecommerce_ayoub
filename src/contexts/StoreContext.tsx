"use client";
import { ReactNode, createContext, useState } from "react";
import { products } from "@/data/store";
import { ProductCard } from "@/interfaces/productCard";
import { SliderValue } from "@/components/StoreFilters/StoreFilters";

export type StoreInterface = {
  name: string | null;
  setName(name: string): void;
  price: SliderValue;
  setPrice(price: SliderValue): void;
  fetchProducts: () => Array<ProductCard>;
};

export const StoreContext = createContext<StoreInterface | null>(null);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<SliderValue>([
    0,
    localStorage.getItem("currency") === "eur" ? 1000 : 10000,
  ]);
  const fetchProducts = () => products;
  return (
    <StoreContext.Provider
      value={{
        name,
        setName,
        price,
        setPrice,
        fetchProducts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
