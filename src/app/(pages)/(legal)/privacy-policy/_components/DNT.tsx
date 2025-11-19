import React from "react";
import { dnt } from "../_constants";

const DNT = () => {
  return (
    <section>
      <h2>{dnt.title}</h2>

      {dnt.content.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </section>
  );
};

export default DNT;
