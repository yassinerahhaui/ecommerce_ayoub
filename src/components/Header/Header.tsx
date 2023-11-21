import Image from "next/image";
import Header1 from "../../../public/images/header2.jpg";
import HeaderStart from "./HeaderStart";
import HeaderEnd from "./HeaderEnd";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Index");
  return (
    <header className="min-h-[100dvh] z-0 w-full relative mt-24 md:mt-[108px] overflow-x-hidden bg-black">
      <Image
        src={Header1}
        alt="image header"
        className="absolute top-0 start-0 w-full h-full z-0"
      />
      <HeaderStart
        welcome={t("header_welcome")}
        title={t("header_title")}
        description={t("header_description")}
      />
      <HeaderEnd
        masque={t("masque_visage")}
        palette={t("palette_maquillage")}
        acheter={t("acheter_btn")}
      />
    </header>
  );
};

export default Header;
