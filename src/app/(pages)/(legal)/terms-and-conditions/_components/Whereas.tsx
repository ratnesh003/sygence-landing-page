import React from "react";
import { whereas } from "../_constants";

const Whereas = () => {
  return (
    <div>
      <h1>{whereas.title}</h1>
      {whereas.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Whereas;
