import React from "react";
import { security } from "../_constants";

const Security = () => {
  return (
    <section>
      <h2>{security.title}</h2>

      {security.sections.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </section>
  );
};

export default Security;
