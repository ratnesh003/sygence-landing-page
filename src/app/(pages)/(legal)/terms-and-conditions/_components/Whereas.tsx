import React from "react";
import { whereas } from "../_constants";

const Whereas = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight my-6">{whereas.title}</h1>
      {whereas.content.map((paragraph, index) => (
        <p key={index} className={index === whereas.content.length - 1 ? "mt-6" : ""}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Whereas;
