import ProductHeader from "@/components/ProductDetails/ProductHeader";
import image from "@/assets/images/products/12.jpg";
import ProductDesc from "@/components/ProductDetails/ProductDesc";
import BestChoices from "@/components/BestChoices/BestChoices";
import { useTranslations } from "next-intl";
import Newsletter from "@/components/Newsletter/Newsletter";
import OrderForm from "@/components/OrderForm/OrderForm";

// fix err
const productData = {
  id: 1,
  name_fr: "Shampoing Pantene Pro-V Miracles Lift & Volume",
  name_ar: "شامبو بانتين برو-في ميراكلز لرفع وكثافة الشعر",
  details_fr:
    "Spécialement conçu pour les cheveux épais et repulpés,,,À la biotine et à l’eau de rose,,,Pour un lavage doux et hydratant de vos cheveux",
  details_ar:
    "مع البيوتين وماء الورد,,,لغسل لطيف ومرطب لشعرك,,,مصمم خصيصًا للشعر الكثيف والممتلئ",
  desc_fr:
    "Spécialement conçu pour les cheveux épais et repulpés, À la biotine et à l’eau de rose, Pour un lavage doux et hydratant de vos cheveux",
  desc_ar:
    "مصمم خصيصًا للشعر الكثيف والممتلئ، مع البيوتين وماء الورد، لغسل لطيف ومرطب لشعرك.",
  price: 150.0,
  old_price: 229.0,
  quantity: 150,
  category: 1,
  image: image,
  created_at: "",
  last_update: "",
};
const header = {
  name_fr: productData.name_fr,
  name_ar: productData.name_ar,
  desc_fr: productData.desc_fr,
  desc_ar: productData.desc_ar,
  price: productData.price,
  old_price: productData.old_price,
  quantity: productData.quantity,
};
const details = {
  details_fr: productData.details_fr,
  details_ar: productData.details_ar,
};

const Product = () => {
  const t = useTranslations("Index");
  return (
    <main className="">
      <ProductHeader header={header} image={productData.image} />
      <ProductDesc details={details} />
      <OrderForm />
      <BestChoices
        best_choices={t("best_choices")}
        popular_products={t("popular_products")}
        add_to_cart={t("add_to_cart")}
        sale={t("sale")}
      />
      <Newsletter />
    </main>
  );
};

export default Product;
