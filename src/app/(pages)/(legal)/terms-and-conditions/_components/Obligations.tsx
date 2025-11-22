import React from "react";
import { obligations } from "../_constants";

const Obligations = () => {
  return (
    <div>
      <h1>{obligations.title}</h1>
      {obligations.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Obligations;
