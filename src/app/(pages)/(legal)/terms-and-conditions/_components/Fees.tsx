import React from "react";
import { fees } from "../_constants";

const Fees = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{fees.title}</h1>
      {fees.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Fees;
