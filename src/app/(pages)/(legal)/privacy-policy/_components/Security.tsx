import React from "react";
import { security } from "../_constants";

const Security = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">{security.title}</h2>

      {security.sections.map((text, index) => (
        <p className={index != security.sections.length ? "mb-6": ""} key={index}>{text}</p>
      ))}
    </section>
  );
};

export default Security;
