import React from "react";
import { agreement } from "../_constants";

const Agreement = () => {
  return (
    <div>
      <h1>{agreement.title}</h1>
      {agreement.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Agreement;
