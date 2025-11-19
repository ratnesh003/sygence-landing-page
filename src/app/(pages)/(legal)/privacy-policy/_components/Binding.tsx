import React from "react";
import { binding } from "../_constants";

const Binding = () => {
  return (
    <section>
      <h2>{binding.title}</h2>

      <p>{binding.intro}</p>

      <h3>{binding.subtitle}</h3>

      <ol>
        {binding.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>

      <p>{binding.footer}</p>
    </section>
  );
};

export default Binding;
