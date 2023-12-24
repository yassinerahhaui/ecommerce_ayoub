"use client";

export const language = (french: string, arabic: string) => {
  if (localStorage.getItem("language") === "fr") {
    return french;
  } else {
    return arabic;
  }
};
export const currency = (prix: string) => {
  if (localStorage.getItem("currency") === "eur") {
    return `€${prix}`;
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
