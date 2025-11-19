import React from "react";
import { rights } from "../_constants";

const Rights = () => {
  return (
    <section>
      <h2>{rights.title}</h2>
      <h3>{rights.subtitle}</h3>

      <p>{rights.intro}</p>

      <ol>
        {rights.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>

      <p>{rights.footer}</p>
    </section>
  );
};

export default Rights;
