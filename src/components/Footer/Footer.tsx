"use client";
import { language } from "@/elements/GlobalFunc";
import Image from "next/image";
import Link from "next/link";
import { footer, icons } from "@/data/footer";
import logo from "../../../public/images/yrshop.png";
import footerbg from "@/assets/images/footer/footer.jpg";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const iconStyle =
    "p-2 ms-2 bg-primary hover:bg-primary-dark text-white rounded cursor-pointer block";
  return (
    <footer className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-6 md:px-20 py-20 gap-4 relative overflow-hidden shadow-md shadow-white text-center md:text-start">
        <Image
          src={footerbg}
          alt=""
          className="absolute top-0 left-0 opacity-30 w-full z-0 min-h-full"
        />
        {footer.map((f) => (
          <div key={f.id} className="z-10">
            <h3 className="text-2xl font-bold text-primary">
              {language(f.title_fr, f.title_ar)}
            </h3>
            <ul className="py-6">
              {f.list.map((item) => (
                <Link key={item.id} href={item.link} className="my-2 block">
                  <li className="text-md flex items-center justify-center md:justify-start text-gray-800 hover:text-gray-950">
                    {item.icon}
                    {language(item.name_fr, item.name_ar)}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-3 items-center min-h-28 px-6 lg:px-20 py-6"
        dir="ltr"
      >
        <p className="text-sm text-gray-800 font-semibold text-center md:text-start">
          Copyright © {year}, YRShop
        </p>
        <Image
          src={logo}
          width={150}
          className="mx-auto rounded"
          alt="YRShop logo image"
        />
        <ul className="flex items-center justify-center md:justify-end">
          {icons.map((icon) => (
            <a key={icon.id} href={icon.link} className={iconStyle}>
              <li>{icon.icon}</li>
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
