"use client";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import Logo from "../../../public/images/yrshop.png";
import { useState } from "react";
import { usePathname } from "next-intl/client";
import { Pages, navData1 } from "@/interfaces/navbar";
import { FaLanguage } from "react-icons/fa";
import { FcCurrencyExchange } from "react-icons/fc";
import Link from "next-intl/link";

const NavPhone = (props: Pages) => {
  const [showList, setShowList] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [currency, setCurrency] = useState(false);
  const pathname = usePathname();
  const navData: navData1[] = [
    { id: 0, name: props.home, link: "/" },
    { id: 1, name: props.store, link: "/store" },
    { id: 2, name: props.blog, link: "/blog" },
    { id: 3, name: props.about, link: "/about" },
    { id: 4, name: props.contact, link: "/contact" },
  ];
  return (
    <>
      <nav
        className="flex md:hidden items-center fixed top-0 start-0 w-full
          justify-between px-6 shadow z-30 shadow-gray-200 bg-white h-24"
      >
        <Image src={Logo} alt="logo image YRShop" width={100} height={60} />
        <button
          className="text-2xl text-gray-800 cursor-pointer"
          onClick={() => setShowList(true)}
        >
          <HiOutlineMenu />
        </button>
      </nav>
      <div
        className={`bg-black/90 fixed block md:hidden backdrop-blur backdrop-invert overflow-hidden z-40 top-0 start-0 text-white transition-all ease-in-out duration-500 ${
          showList === true ? "w-full h-full p-6" : "w-0 h-0 p-0"
        }`}
      >
        <button
          className="text-2xl py-1 px-3 ms-auto rounded-md cursor-pointer select-none bg-red-700 font-bold"
          onClick={() => setShowList(false)}
        >
          x
        </button>
        <ul>
          {navData.map((el) => (
            <Link key={el.id} href={el.link} onClick={() => setShowList(false)}>
              <li className="text-xl font-medium my-4">{el.name}</li>
            </Link>
          ))}
          <hr />
          <li className="mb-2 mt-4">
            <button
              className="text-4xl pb-2 font-medium"
              onClick={() =>
                showLang === false ? setShowLang(true) : setShowLang(false)
              }
            >
              <FaLanguage />
            </button>
            <ul
              className={`${
                showLang === true
                  ? "block bg-white rounded text-black"
                  : "hidden"
              }`}
            >
              <Link
                href={pathname}
                locale="fr"
                onClick={() => {
                  setShowLang(false);
                  setShowList(false);
                  localStorage.setItem("language", "fr");
                }}
              >
                <li className="text-xl text-center border-b border-gray-500 font-medium py-2">
                  française
                </li>
              </Link>
              <Link
                href={pathname}
                locale="ar"
                onClick={() => {
                  setShowLang(false);
                  setShowList(false);
                  localStorage.setItem("language", "ar");
                }}
              >
                <li className="text-xl text-center font-medium py-2">
                  العربية
                </li>
              </Link>
            </ul>
          </li>
          <li className="my-2">
            <button
              className="text-4xl pb-2 font-medium"
              onClick={() => {
                currency === false ? setCurrency(true) : setCurrency(false);
              }}
            >
              <FcCurrencyExchange />
            </button>
            <ul
              className={`${
                currency === true
                  ? "block bg-white rounded text-black"
                  : "hidden"
              }`}
            >
              <li
                onClick={() => {
                  setCurrency(false);
                  setShowList(false);
                  localStorage.setItem("currency", "eur");
                  window.location.reload();
                }}
                className="text-xl text-center cursor-pointer border-b border-gray-500 font-medium py-2"
              >
                EUR
              </li>
              <li
                onClick={() => {
                  setCurrency(false);
                  setShowList(false);
                  localStorage.setItem("currency", "mad");
                  window.location.reload();
                }}
                className="text-xl text-center cursor-pointer font-medium py-2"
              >
                MAD
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavPhone;
