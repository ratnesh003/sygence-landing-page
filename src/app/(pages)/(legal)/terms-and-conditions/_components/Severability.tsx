import React from "react";
import { severability } from "../_constants";

const Severability = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{severability.title}</h1>
      {severability.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Severability;
