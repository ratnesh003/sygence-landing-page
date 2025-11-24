import React from "react";
import { confidentiality } from "../_constants";

const Confidentiality = () => {
  return (
    <div>
      <h1>{confidentiality.title}</h1>
      {confidentiality.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Confidentiality;
