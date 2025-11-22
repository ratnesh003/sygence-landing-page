import React from "react";
import { definitions } from "../_constants";

const Definitions = () => {
  return (
    <div>
      <h1>{definitions.title}</h1>
      {definitions.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Definitions;
