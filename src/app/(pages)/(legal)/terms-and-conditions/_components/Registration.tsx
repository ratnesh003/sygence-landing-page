import React from "react";
import { registration } from "../_constants";

const Registration = () => {
  return (
    <div>
      <h1>{registration.title}</h1>
      {registration.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Registration;
