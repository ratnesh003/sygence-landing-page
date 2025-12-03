import React from "react";
import { confidentiality } from "../_constants";

const Confidentiality = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{confidentiality.title}</h1>
      {confidentiality.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Confidentiality;
