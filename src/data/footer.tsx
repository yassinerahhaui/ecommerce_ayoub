import {
  FaBuilding,
  FaPhoneAlt,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";
 
export const footer = [
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

export const icons = [
  { id: 1, icon: <FaFacebookF />, link: "" },
  { id: 2, icon: <FaInstagram />, link: "" },
  { id: 3, icon: <FaSnapchatGhost />, link: "" },
  { id: 4, icon: <FaTiktok />, link: "" },
  { id: 5, icon: <FaXTwitter />, link: "" },
];
