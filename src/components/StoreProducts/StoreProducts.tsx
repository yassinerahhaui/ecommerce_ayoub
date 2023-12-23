"use client";
import { useContext } from "react";
import { StoreContext } from "@/contexts/StoreContext";
import ProductCard from "../ProductCard/ProductCard";

const StoreProducts = ({
  add_to_cart,
  sale,
}: {
  add_to_cart: string;
  sale: string;
}) => {
  const context = useContext(StoreContext);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-2 md:p-6 md:gap-6">
      {context?.fetchProducts().map((pr) => (
        <ProductCard
          key={pr.id}
          data={pr}
          add_to_cart={add_to_cart}
          sale={sale}
        />
      ))}
    </div>
  );
};

export default StoreProducts;
