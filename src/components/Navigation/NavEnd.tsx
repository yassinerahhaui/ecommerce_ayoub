"use client";
import { useState } from "react";
import { Link, usePathname } from "@/navigation";
import { FaLanguage } from "react-icons/fa";
import { FcCurrencyExchange } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
const NavEnd = ({ search }: { search: string }) => {
  const [list, setList] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <ul className="flex items-center text-center text-gray-800">
        <li className="m-3 group relative">
          <button className="text-2xl">
            <FaLanguage />
          </button>
          <ul className="hidden z-30 font-medium group-hover:block absolute left-1/2 translate-x-[-50%] bottom-[-200%] bg-gray-50">
            <li className="h-8 flex justify-center items-center w-24 border-b border-gray-200">
              <Link
                href={pathname}
                locale="fr"
                onClick={() => localStorage.setItem("language", "fr")}
              >
                Française
              </Link>
            </li>
            <li className="h-8 flex justify-center items-center w-24">
              <Link
                href={pathname}
                locale="ar"
                onClick={() => localStorage.setItem("language", "ar")}
              >
                العربية
              </Link>
            </li>
          </ul>
        </li>
        <li className="m-3 group relative">
          <button className="text-2xl">
            <FcCurrencyExchange />
          </button>

          <ul className="hidden z-30 font-medium group-hover:block absolute left-1/2 translate-x-[-50%] bottom-[-200%] bg-gray-50">
            <li
              className="h-8 flex justify-center items-center w-24 cursor-pointer border-b border-gray-200"
              onClick={() => {
                localStorage.setItem("currency", "mad");
                window.location.reload();
              }}
            >
              MAD
            </li>
            <li
              className="h-8 flex justify-center items-center w-24 cursor-pointer"
              onClick={() => {
                localStorage.setItem("currency", "eur");
                window.location.reload();
              }}
            >
              EUR
            </li>
          </ul>
        </li>
        <li className="m-3">
          <button className="text-2xl" onClick={() => setSearchBar(true)}>
            <FaSearch />
          </button>
        </li>
        <li className="m-3">
          <button className="text-2xl" onClick={() => setList(true)}>
            <HiOutlineMenu />
          </button>
        </li>
      </ul>
      <div
        className={`transition-all w-96 ease-in-out duration-500 z-50 bg-black text-white shadow-md shadow-slate-400 fixed top-0 end-0 h-full ${
          list === true ? "end-0" : "end-[-100%]"
        }`}
      ></div>
      <div
        className={`fixed top-0 left-0 z-40 w-full h-full ${
          list === true ? "block" : "hidden"
        }`}
        onClick={() => setList(false)}
      ></div>
      <div
        className={`fixed top-[50%] left-[50%] overflow-hidden transform translate-x-[-50%] translate-y-[-50%] transition-all ease-in-out duration-500 z-40 bg-[#000000d8] ${
          searchBar === true ? `w-full h-full` : `w-0 h-0`
        }`}
        onClick={() => setSearchBar(false)}
      ></div>
      <form
        action=""
        className={`p-2 fixed top-[50%] left-[50%] overflow-hidden transform translate-x-[-50%] translate-y-[-50%] transition-all ease-in-out duration-500 z-50 ${
          searchBar === true ? `w-full h-max block` : `w-0 hidden`
        }`}
        method="get"
      >
        <input
          type="search"
          placeholder={search}
          className={`p-4 mx-auto text-white block focus:outline-none text-center text-2xl placeholder:text-2xl placeholder:font-semibold font-semibold bg-transparent border-b border-white rounded z-[51] ${
            searchBar === true ? `w-[90%] sm:w-[80%] select-auto` : `w-0`
          }`}
          name="search"
          autoFocus={searchBar === true ? true : false}
        />
      </form>
    </>
  );
};

export default NavEnd;
