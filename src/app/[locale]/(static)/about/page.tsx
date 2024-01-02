import AbouDetails from "@/components/About/AbouDetails";
import AboutBcakground from "@/components/About/AboutBcakground";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import Newsletter from "@/components/Newsletter/Newsletter";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("Index");
  return (
    <section>
      <AboutBcakground home={t("home")} about={t("about")} />
      <AbouDetails
        header_welcome={t("header_welcome")}
        about_title={t("about_title")}
        about_desc={t("about_desc")}
      />
      <div className="mb-20">
        <HomeAbout />
      </div>
      <Newsletter />
    </section>
  );
};

export default About;
