import React from "react";
import { personaldata } from "../_constants";

const PersonalData = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">{personaldata.title}</h2>
      <p>{personaldata.intro}</p>

      <ol className="list-decimal pl-9">
        {personaldata.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </section>
  );
};

export default PersonalData;
