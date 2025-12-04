import React from "react";
import { warranties } from "../_constants";

const Warranties = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{warranties.title}</h1>
      {warranties.content.map((paragraph: string, index: number) => (
        <p className="mb-6" key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Warranties;
