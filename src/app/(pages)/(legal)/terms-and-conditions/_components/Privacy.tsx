import React from "react";
import { privacy } from "../_constants";

const Privacy = () => {
  return (
    <div>
      <h1>{privacy.title}</h1>
      {privacy.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Privacy;
