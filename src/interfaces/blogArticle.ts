import { StaticImageData } from "next/image";

export interface ArticleInterface {
  id: number;
  name_fr: string;
  name_ar: string;
  desc_fr: string;
  desc_ar: string;
  date: string;
  image: StaticImageData;
}
