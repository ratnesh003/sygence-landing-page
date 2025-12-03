import React from "react";
import { support } from "../_constants";

const Support = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{support.title}</h1>
      {support.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Support;
