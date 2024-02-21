"use client";
import { ReactNode, useState, createContext } from "react";

export type OrderType = {
  displayForm: boolean;
  setDisplayForm(displayForm: boolean): void;
};
export const OrderContext = createContext<OrderType | null>(null);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [displayForm, setDisplayForm] = useState<boolean>(false);
  return (
    <OrderContext.Provider value={{ displayForm, setDisplayForm }}>
      {children}
    </OrderContext.Provider>
  );
};
