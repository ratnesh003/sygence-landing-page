import React from "react";
import { governing } from "../_constants";

const Governing = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{governing.title}</h1>
      {governing.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Governing;
