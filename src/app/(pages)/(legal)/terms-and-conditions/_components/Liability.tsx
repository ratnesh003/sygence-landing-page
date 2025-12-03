import React from "react";
import { liability } from "../_constants";

const Liability = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{liability.title}</h1>
      {liability.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Liability;
