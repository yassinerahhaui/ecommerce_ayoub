interface ContactItem {
  id: number;
  item_fr: string;
  item_ar: string;
}
export interface ContactInfoInterface {
  id: number;
  title_fr: string;
  title_ar: string;
  list: Array<ContactItem>;
}
