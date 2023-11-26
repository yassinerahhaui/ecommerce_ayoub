import { StaticImageData } from "next/image";

export interface ProductCard {
  id?: number;
  name_fr: string;
  name_ar: string;
  price: number;
  old_price: number | undefined;
  sale: boolean;
  in_stock: boolean;
  image: StaticImageData;
}
