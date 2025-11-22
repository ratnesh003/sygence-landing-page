import React from "react";
import { acceptance } from "../_constants";

const Acceptance = () => {
  return (
    <div>
      <h1>{acceptance.title}</h1>
      {acceptance.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Acceptance;
