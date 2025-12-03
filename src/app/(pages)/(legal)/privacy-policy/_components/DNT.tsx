import React from "react";
import { dnt } from "../_constants";

const DNT = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">{dnt.title}</h2>

      {dnt.content.map((line, index) => (
        <p className="inline" key={index}>{line}</p>
      ))}
    </section>
  );
};

export default DNT;
