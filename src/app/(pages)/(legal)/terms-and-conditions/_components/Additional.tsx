import React from "react";
import { additional } from "../_constants";

const Additional = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{additional.title}</h1>
      {additional.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Additional;
