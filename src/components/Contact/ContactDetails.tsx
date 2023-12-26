"use client";

import { contact_info } from "@/data/contact";
import ContactDetailsItem from "./ContactDetailsItem";

export const h4Style =
  "text-[#33B244] font-bold text-xs text-center sm:text-start";

const ContactDetails = () => {
  return (
    <div className="my-9 lg:h-[20rem] flex items-center ">
      <ul className="flex flex-col items-center justify-center sm:items-start md:flex-row md:justify-between max-w-[90rem] m-auto py-5 px-6 md:px-20 w-full gap-16">
        {contact_info.map((el) => (
          <ContactDetailsItem key={el.id} data={el} />
        ))}
      </ul>
    </div>
  );
};

export default ContactDetails;
