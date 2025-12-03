import React from "react";
import { rights } from "../_constants";

const Rights = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">{rights.title}</h2>
      <h3 className="mb-6 tracking-tight font-bold">{rights.subtitle}</h3>

      <p>{rights.intro}</p>

      <ol className="list-decimal pl-8">
        {rights.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>

      <p className="mt-6">{rights.footer}</p>
    </section>
  );
};

export default Rights;
