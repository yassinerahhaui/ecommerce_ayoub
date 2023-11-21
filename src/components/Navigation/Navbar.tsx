import Image from "next/image";
import { useTranslations } from "next-intl";
import NavEnd from "./NavEnd";
import NavStart from "./NavStart";
import Logo from "../../../public/images/yrshop.png";
import NavPhone from "./NavPhone";

const Navbar = () => {
  const t = useTranslations("Index");

  return (
    <>
      <nav className="hidden md:flex fixed top-0 start-0 z-30 shadow-xs shadow-gray-400 w-full h-[108px] bg-white text-black justify-between items-center px-12">
        <NavStart
          home={t("home")}
          store={t("store")}
          blog={t("blog")}
          about={t("about")}
          contact={t("contact")}
        />
        <Image src={Logo} width={150} className="ms-[-50px]" alt="Logo" />
        <NavEnd />
      </nav>
      <NavPhone
        home={t("home")}
        store={t("store")}
        blog={t("blog")}
        about={t("about")}
        contact={t("contact")}
      />
    </>
  );
};

export default Navbar;

{
  /* <Link href="/" locale="fr">
        Française
      </Link>{" "}
      <br />
      <Link href="/" locale="ar">
        Arabic
      </Link> */
}
