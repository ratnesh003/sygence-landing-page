import React from "react";
import { personaldata } from "../_constants";

const PersonalData = () => {
  return (
    <section>
      <h2>{personaldata.title}</h2>
      <p>{personaldata.intro}</p>

      <ol>
        {personaldata.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </section>
  );
};

export default PersonalData;
