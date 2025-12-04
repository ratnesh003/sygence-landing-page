import React from "react";
import { definitions } from "../_constants";

const Definitions = () => {
  return (
    <div>
      <h1  className="text-2xl font-semibold tracking-tight my-6">{definitions.title}</h1>
      {definitions.content.map((paragraph: string, index: number) => (
        <p key={index} className={index === definitions.content.length - 1 ? "" : "mb-6"}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Definitions;
