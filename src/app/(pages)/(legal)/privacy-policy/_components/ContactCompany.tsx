import React from "react";
import { contactCompany } from "../_constants";

const ContactCompany = () => {
  return (
    <section>
      <h2>{contactCompany.title}</h2>

      {contactCompany.content.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </section>
  );
};

export default ContactCompany;
