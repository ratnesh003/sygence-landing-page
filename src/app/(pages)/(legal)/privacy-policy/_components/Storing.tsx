import React from "react";
import { storing } from "../_constants";

const Storing = () => {
  return (
    <section>
      <h2>{storing.title}</h2>
      <p>{storing.intro}</p>

      <h3>{storing.subtitle}</h3>

      <ol>
        {storing.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>

      <p>{storing.footer}</p>
    </section>
  );
};

export default Storing;
