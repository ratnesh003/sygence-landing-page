import React from "react";
import { publicity } from "../_constants";

const Publicity = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{publicity.title}</h1>
      {publicity.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Publicity;
