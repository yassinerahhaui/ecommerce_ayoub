import OurColl1 from "./OurColl1";
import OurColl2 from "./OurColl2";
import OurColl3 from "./OurColl3";
import OurColl4 from "./OurColl4";
import OurCollHeader from "./OurCollHeader";
import { useTranslations } from "next-intl";

const OurCollections = () => {
  const t = useTranslations("Index");
  return (
    <section className="mb-16">
      <OurCollHeader />
      <div className="mb-10">
        <OurColl1 browse_all={t("browse_all")} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-20 my-6">
          <OurColl2 view_more={t("view_more")} />
          <OurColl3 view_more={t("view_more")} />
        </div>
        <OurColl4
          masque={t("masque_visage")}
          palette={t("palette_maquillage")}
          view_more={t("view_more")}
        />
      </div>
    </section>
  );
};

export default OurCollections;
