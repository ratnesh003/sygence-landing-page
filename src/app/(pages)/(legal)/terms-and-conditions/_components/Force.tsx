import React from "react";
import { force } from "../_constants";

const Force = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{force.title}</h1>
      {force.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Force;
