"use client";
import { language } from "@/elements/GlobalFunc";
import Image from "next/image";
import Link from "next/link";
// import { footer, icons } from "@/data/footer";
import logo from "../../../public/images/yrshop.png";
import footerbg from "@/assets/images/footer/footer.jpg";
import {
  FaBuilding,
  FaPhoneAlt,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";
 
const footer = [
  {
    id: 1,
    title_fr: "Contact Rapide",
    title_ar: "اتصال سريع",
    list: [
      {
        id: 1,
        link: "",
        name_fr: "HAY NAJD 2 LOT CHOROUK OUJDA",
        name_ar: "حي النجد 2 تجزئة الشروق وجدة",
        icon: <FaBuilding />,
      },
      {
        id: 2,
        link: "https://www.google.com/maps/dir/34.6522268,-1.8762186/34.6522276,-1.8762816/@34.6497893,-1.8968285,2426m/data=!3m1!1e3!4m2!4m1!3e0?entry=ttu",
        name_fr: "Aller à l'emplacement",
        name_ar: "اذهب إلى الموقع",
        icon: <MdLocationPin />,
      },
      {
        id: 3,
        link: "",
        name_fr: "+212630034545",
        name_ar: "+212630034545",
        icon: <FaPhoneAlt />,
      },
      {
        id: 4,
        link: "",
        name_fr: "yrshop.service@gmail.com",
        name_ar: "yrshop.service@gmail.com",
        icon: <MdEmail />,
      },
    ],
  },
  {
    id: 2,
    title_fr: "Entreprise",
    title_ar: "الشركة",
    list: [
      {
        id: 1,
        link: "",
        icon: "",
        name_fr: "À propos de nous",
        name_ar: "معلومات عنا",
      },
      {
        id: 2,
        link: "",
        icon: "",
        name_fr: "Itinéraire sur la carte",
        name_ar: "اتجاه الخريطة",
      },
      {
        id: 3,
        link: "",
        icon: "",
        name_fr: "Partenaire officiel",
        name_ar: "الشريك الرسمي",
      },
      {
        id: 4,
        link: "",
        icon: "",
        name_fr: "Carrière",
        name_ar: "الحياة المهنية",
      },
    ],
  },
  {
    id: 3,
    title_fr: "Liens utiles",
    title_ar: "روابط مفيدة",
    list: [
      {
        id: 1,
        link: "",
        icon: "",
        name_fr: "Support d'aide",
        name_ar: "المساعدة والدعم",
      },
      {
        id: 2,
        link: "",
        icon: "",
        name_fr: "Base de connaissances",
        name_ar: "قاعدة المعرفة",
      },
      { id: 3, link: "", icon: "", name_fr: "Ressources", name_ar: "الموارد" },
    ],
  },
  {
    id: 4,
    title_fr: "Informations légales",
    title_ar: "معلومات قانونية",
    list: [
      {
        id: 1,
        link: "",
        icon: "",
        name_fr: "Termes et conditions",
        name_ar: "الشروط و الأحكام",
      },
      {
        id: 2,
        link: "",
        icon: "",
        name_fr: "Politique de confidentialité",
        name_ar: "سياسة الخصوصية",
      },
      {
        id: 3,
        link: "",
        icon: "",
        name_fr: "Politique en matière de cookies",
        name_ar: "سياسة ملفات الارتباط",
      },
      {
        id: 4,
        link: "",
        icon: "",
        name_fr: "DMCA",
        name_ar: "قانون الألفية الجديدة لحقوق طبع ونشر المواد الرقمية",
      },
    ],
  },
];

const icons = [
  { id: 1, icon: <FaFacebookF />, link: "" },
  { id: 2, icon: <FaInstagram />, link: "" },
  { id: 3, icon: <FaSnapchatGhost />, link: "" },
  { id: 4, icon: <FaTiktok />, link: "" },
  { id: 5, icon: <FaXTwitter />, link: "" },
];


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
