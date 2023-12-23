import StoreFilters from "@/components/StoreFilters/StoreFilters";
import StoreProducts from "@/components/StoreProducts/StoreProducts";
import { StoreProvider } from "@/contexts/StoreContext";
import { useTranslations } from "next-intl";
const Store = () => {
  const t = useTranslations("Index");
  return (
    <StoreProvider>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <aside className="p-2">
          <StoreFilters />
        </aside>
        <main className="sm:col-span-2 md:col-span-3 lg:col-span-4">
          <StoreProducts add_to_cart={t("add_to_cart")} sale={t("sale")} />
        </main>
      </div>
    </StoreProvider>
  );
};

export default Store;
