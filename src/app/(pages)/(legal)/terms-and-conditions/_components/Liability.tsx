import React from "react";
import { liability } from "../_constants";

const Liability = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{liability.title}</h1>
      {liability.content.map((paragraph: string, index: number) => (
        <p className="mb-6" key={index}>{paragraph}</p>
      ))}
      <h1 className="text-xl font-medium tracking-tight mb-6">{liability.subcontent.header}</h1>
      <ul className="list-decimal pl-7">
        {liability.subcontent.points.map((pts, idx) => (
          <li key={idx}>{pts}</li>
        ))}
      </ul>
    </div>
  );
};

export default Liability;
