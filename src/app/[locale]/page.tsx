import Collections from "@/components/Collections/Collections";
import Header from "@/components/Header/Header";
import BestChoices from "@/components/BestChoices/BestChoices";
import { useTranslations } from "next-intl";
import OurCollections from "@/components/Collections/OurCollections";
import Newsletter from "@/components/Newsletter/Newsletter";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main>
      <Header />
      <Collections />
      <BestChoices
        best_choices={t("best_choices")}
        popular_products={t("popular_products")}
        add_to_cart={t("add_to_cart")}
        sale={t("sale")}
      />
      <OurCollections />
      <Newsletter />
    </main>
  );
}
