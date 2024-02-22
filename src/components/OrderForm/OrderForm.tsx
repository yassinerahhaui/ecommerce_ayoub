"use client";
import React, { useState, useContext } from "react";
import { backendUrl } from "@/elements/GlobalFunc";
import { OrderContext } from "@/contexts/OrderContext";

interface createOrderInterface {
  name: string;
  phone: string;
  city: string;
  address: string;
}

const OrderForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispF = useContext(OrderContext);
  const [formData, setFormData] = useState<createOrderInterface>({
    name: "",
    phone: "",
    city: "",
    address: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Call the createOrder function with the form data
      await createOrder(formData);
      // Optionally, reset the form data after submission
      setFormData({
        name: "",
        phone: "",
        city: "",
        address: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const createOrder = async (data: createOrderInterface) => {
    try {
      // Replace the empty string with your actual API endpoint
      const apiUrl = `${backendUrl}/order/create`;

      const response = await fetch(apiUrl, {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      // Handle the response as needed
      const result = await response.json();
      console.log("Order created successfully:", result);
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  };
  const labelStyle = "font-bold text-gray-900 text-md";
  const inputStyle =
    "block border border-gray-400 rounded bg-white px-4 py-2 text-lg mb-2";
  const btnStyle = `bg-primary text-white rounded py-2 text-lg font-bold w-full h-max flex items-center justify-center px-6`;
  return (
    <>
      {dispF?.displayForm ? (
        <div className="p-6 rounded bg-white fixed max-w-[90%] max-h-[90%] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-50">
          <form method="post" onSubmit={handleSubmit}>
            <label htmlFor="name" className={labelStyle}>
              Name:
            </label>
            <input
              type="text"
              name="name"
              className={inputStyle}
              id="name"
              onChange={handleInputChange}
            />
            <label htmlFor="phone" className={labelStyle}>
              Phone or E-mail:
            </label>
            <input
              type="text"
              name="phone"
              className={inputStyle}
              id="phone"
              onChange={handleInputChange}
            />
            <label htmlFor="city" className={labelStyle}>
              City:
            </label>
            <input type="text" name="city" className={inputStyle} id="city" />
            <label htmlFor="address" className={labelStyle}>
              Address:
            </label>
            <textarea
              name="address"
              id="address"
              className={inputStyle}
              onChange={handleInputChange}
            ></textarea>
            <button
              type="submit"
              className={
                +isLoading
                  ? `${btnStyle} cursor-default`
                  : `${btnStyle} cursor-pointer hover:bg-primary-dark`
              }
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
      {dispF?.displayForm ? (
        <div
          className="fixed top-0 left-0 w-full h-full bg-[#000000d8] z-40"
          onClick={() => dispF?.setDisplayForm(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
};

export default OrderForm;
