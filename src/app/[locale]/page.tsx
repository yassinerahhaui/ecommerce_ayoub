import Collections from "@/components/Collections/Collections";
import Header from "@/components/Header/Header";
import BestChoices from "@/components/BestChoices/BestChoices";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main>
      <Header />
      <Collections browse_collection={t("browse_collection")} />
      <BestChoices
        best_choices={t("best_choices")}
        popular_products={t("popular_products")}
      />
    </main>
  );
}
