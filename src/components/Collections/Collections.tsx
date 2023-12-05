import image1 from "@/assets/images/collections/1.jpg";
import image2 from "@/assets/images/collections/2.jpg";
import Collection from "./Collection";
import { useTranslations } from "next-intl";

const collections_img = [
  {
    id: 1,
    img: image1,
    name_fr: "Collection 1",
    name_ar: "المجموعة 1",
    price: "32.50",
  },
  {
    id: 2,
    img: image2,
    name_fr: "Collection 2",
    name_ar: "المجموعة 2",
    price: "22.99",
  },
];

const Collections = () => {
  const t = useTranslations("Index");
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-10 mb-16">
      {collections_img.map((el) => {
        return (
          <Collection data={el} browse_collection={t("browse_collection")} />
        );
      })}
    </section>
  );
};

export default Collections;
