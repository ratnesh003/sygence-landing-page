import React from "react";
import { recipients } from "../_constants";

const Recipients = () => {
  return (
    <section>
      <h2>{recipients.title}</h2>
      <p>{recipients.intro}</p>

      <ol>
        {recipients.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>

      <p>{recipients.footer}</p>
    </section>
  );
};

export default Recipients;
