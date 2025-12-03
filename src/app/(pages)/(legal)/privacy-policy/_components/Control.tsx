import React from "react";
import { control } from "../_constants";

const Control = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">{control.title}</h2>

      {control.sections.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </section>
  );
};

export default Control;
