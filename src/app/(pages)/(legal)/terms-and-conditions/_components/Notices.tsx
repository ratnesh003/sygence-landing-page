import React from "react";
import { notices } from "../_constants";

const Notices = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{notices.title}</h1>
      {notices.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Notices;
