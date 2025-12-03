import React from "react";
import { storing } from "../_constants";

const Storing = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">{storing.title}</h2>
      <p className="mb-6">{storing.intro}</p>

      <p>{storing.subtitle}</p>

      <ol className="list-decimal pl-8">
        {storing.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>

      <p className="mt-6">{storing.footer}</p>
    </section>
  );
};

export default Storing;
