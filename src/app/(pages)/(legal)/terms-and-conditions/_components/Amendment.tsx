import React from "react";
import { amendment } from "../_constants";

const Amendment = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{amendment.title}</h1>
      {amendment.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Amendment;
