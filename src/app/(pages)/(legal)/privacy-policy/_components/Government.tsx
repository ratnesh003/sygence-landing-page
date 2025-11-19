import React from "react";
import { government } from "../_constants";

const Government = () => {
  return (
    <section>
      <h2>{government.title}</h2>

      <p>{government.intro}</p>
      <p>{government.section1}</p>
      <p>{government.section2}</p>
      <p>{government.footer}</p>
    </section>
  );
};

export default Government;
