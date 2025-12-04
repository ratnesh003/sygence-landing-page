import React from "react";
import { ipr } from "../_constants";

const Ipr = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{ipr.title}</h1>
      {ipr.content.map((paragraph: string, index: number) => (
        <p key={index} className={index === ipr.content.length - 1 ? "" : "mb-6"}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Ipr;
