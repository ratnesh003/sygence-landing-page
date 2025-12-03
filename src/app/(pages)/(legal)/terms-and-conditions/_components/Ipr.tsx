import React from "react";
import { ipr } from "../_constants";

const Ipr = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{ipr.title}</h1>
      {ipr.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Ipr;
