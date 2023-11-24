"use client";
import { useEffect } from "react";

const LanguageDefault = () => {
  useEffect(() => {
    !localStorage.getItem("language")
      ? localStorage.setItem("language", "fr")
      : "";
    !localStorage.getItem("currency")
      ? localStorage.setItem("currency", "eur")
      : "";
  }, []);
  return <></>;
};

export default LanguageDefault;
