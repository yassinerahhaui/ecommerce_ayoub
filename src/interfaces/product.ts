import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  name_fr: string;
  name_ar: string;
  details_fr: string[];
  details_ar: string[];
  desc_fr: string;
  desc_ar: string;
  price: number;
  old_price: number;
  quantity: number;
  category: number;
  image: StaticImageData;
  created_at: string;
}
