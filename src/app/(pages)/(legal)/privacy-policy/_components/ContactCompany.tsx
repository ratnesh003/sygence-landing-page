import React from "react";
import { contactCompany } from "../_constants";

const ContactCompany = () => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold tracking-tight my-6">{contactCompany.title}</h2>

      {contactCompany.content.map((line, index) => (
        <p key={index}>{line}{" "}
          {!index && (
            <a className="underline" href={`mailto:${contactCompany.mail}`}>{contactCompany.mail}</a>
          )}
          {" "}.
        </p>
      ))}
    </section>
  );
};

export default ContactCompany;
