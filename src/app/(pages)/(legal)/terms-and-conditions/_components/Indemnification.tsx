import React from "react";
import { indemnification } from "../_constants";

const Indemnification = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{indemnification.title}</h1>
      {indemnification.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Indemnification;
