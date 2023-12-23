"use client";
import { ReactNode, createContext, useState } from "react";
import { products } from "@/data/store";
import { ProductCard } from "@/interfaces/productCard";

export type StoreInterface = {
  name: string | null;
  setName(name: string): void;
  price_more: number;
  setPrice_more(price_more: number): void;
  price_less: number;
  setPrice_less(price_less: number): void;
  fetchProducts: () => Array<ProductCard>;
};

export const StoreContext = createContext<StoreInterface | null>(null);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");
  const [price_more, setPrice_more] = useState(0);
  const [price_less, setPrice_less] = useState(1000000);
  const fetchProducts = () => {
    return products;
  };
  return (
    <StoreContext.Provider
      value={{
        name,
        setName,
        price_more,
        setPrice_more,
        price_less,
        setPrice_less,
        fetchProducts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
