import ContactBackground from "@/components/Contact/ContactBackground";
import ContactDetails from "@/components/Contact/ContactDetails";
import FormContact from "@/components/Contact/FormContact";
import Newsletter from "@/components/Newsletter/Newsletter";
import { useTranslations } from "next-intl";
import React from "react";

const Contact = () => {
  const t = useTranslations("Index");
  return (
    <section>
      <ContactBackground
        contact_us={t("contact_us")}
        contact={t("contact")}
        home={t("home")}
      />
      <ContactDetails />
      <FormContact
        contact_us={t("contact_us")}
        name={t("name")}
        email={t("email")}
        subject={t("subject")}
        send={t("send")}
      />
      <Newsletter />
    </section>
  );
};

export default Contact;
