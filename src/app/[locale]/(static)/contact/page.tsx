import ContactBackground from "@/components/Contact/ContactBackground";
import ContactDetails from "@/components/Contact/ContactDetails";
import FormContact from "@/components/Contact/FormContact";
import Newsletter from "@/components/Newsletter/Newsletter";
import React from "react";

const Contact = () => {
  return<section>
    <ContactBackground />
    <ContactDetails/>
    <FormContact/>
    <Newsletter/>
  </section>;
};

export default Contact;
