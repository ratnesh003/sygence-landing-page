import React from "react";
import { liability } from "../_constants";

const Liability = () => {
  return (
    <div>
      <h1>{liability.title}</h1>
      {liability.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Liability;
