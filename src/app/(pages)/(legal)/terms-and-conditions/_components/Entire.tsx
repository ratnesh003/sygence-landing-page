import React from "react";
import { entire } from "../_constants";

const Entire = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{entire.title}</h1>
      {entire.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Entire;
