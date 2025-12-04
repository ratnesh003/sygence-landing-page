import React from "react";
import { acceptance } from "../_constants";

const Acceptance = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{acceptance.title}</h1>
      {acceptance.content.map((paragraph: string, index: number) => (
        <p key={index} className={index === acceptance.content.length - 1 ? "" : "mb-6"}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Acceptance;
