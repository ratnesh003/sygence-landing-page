import React from "react";
import { agreement } from "../_constants";

const Agreement = () => {
  return (
    <div>
      <h1 className="text-5xl font-medium tracking-tighter mb-6">{agreement.title}</h1>
      {agreement.content.map((paragraph, index) => (
        <p key={index} className={index === agreement.content.length - 1 ? "" : "mb-6"}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Agreement;
