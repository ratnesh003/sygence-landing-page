import React from "react";
import { recipients } from "../_constants";

const Recipients = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">{recipients.title}</h2>
      <p>{recipients.intro}</p>

      <ol className="list-decimal pl-8">
        {recipients.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>

      <p className="mt-6">{recipients.footer}</p>
    </section>
  );
};

export default Recipients;
