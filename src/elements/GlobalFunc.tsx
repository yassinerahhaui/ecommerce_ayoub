"use client";

export const language = (fr: string, ar: string) => {
  if (localStorage.getItem("language") === "fr") {
    return fr;
  } else {
    return ar;
  }
};
export const currency = (prix: string) => {
  if (localStorage.getItem("currency") === "eur") {
    return `${prix}€`;
  } else {
    let mylang;
    localStorage.getItem("language") === "fr"
      ? (mylang = "dh")
      : (mylang = "د.م");
    let myprix: any = parseFloat(prix) * 10;
    myprix = myprix.toFixed(2);
    myprix.toString().split(".")[1] == "00"
      ? (myprix = parseFloat(myprix).toFixed(0))
      : "";
    return `${myprix}${mylang}`;
  }
};
