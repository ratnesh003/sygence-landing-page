import React from "react";
import { termination } from "../_constants";

const Termination = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{termination.title}</h1>
      {termination.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Termination;
