import React from "react";
import { binding } from "../_constants";

const Binding = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">{binding.title}</h2>

      <p className="mb-6">{binding.intro}</p>

      <p>{binding.subtitle}</p>

      <ol className="list-decimal pl-8">
        {binding.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>

      <p className="mt-6">{binding.footer}</p>
    </section>
  );
};

export default Binding;
