"use client";
import { language } from "@/elements/GlobalFunc";
import { h4Style } from "./ContactDetails";
import { ContactInfoInterface } from "@/interfaces/contact";

const ContactDetailsItem = ({ data }: { data: ContactInfoInterface }) => {
  const PStyle = "text-[#222] font-light text-xl text-center sm:text-start";
  return (
    <li className="flex flex-col md:gap-3">
      <h4 className={h4Style}>{language(data.title_fr, data.title_ar)}</h4>
      {data.list.map((el) => (
        <p className={PStyle}>{language(el.item_fr, el.item_ar)}</p>
      ))}
    </li>
  );
};

export default ContactDetailsItem;
