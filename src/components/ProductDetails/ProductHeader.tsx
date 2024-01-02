import { Product } from "@/interfaces/product";
import Details from "./Details";
import Info from "./Info";
import ProductImages from "./ProductImages";
import { StaticImageData } from "next/image";
export interface DetailsInterface {
  name_fr: string;
  name_ar: string;
  desc_fr: string;
  desc_ar: string;
  price: number;
  old_price: number;
  quantity: number;
}
const ProductHeader = ({
  header,
  image,
}: {
  header: DetailsInterface;
  image: StaticImageData;
}) => {
  return (
    <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-10 px-6 md:px-20">
      <ProductImages image={image} />
      <Details header={header} />
      <Info />
    </section>
  );
};

export default ProductHeader;
