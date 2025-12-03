import React from "react";
import { government } from "../_constants";

const Government = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">{government.title}</h2>

      <p className="mb-6">{government.intro}</p>
      <p>{government.section1}</p>
      <p className="mt-6">{government.section2}</p>
      <p>{government.footer}</p>
    </section>
  );
};

export default Government;
