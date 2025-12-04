import React from "react";
import { acknowledgement } from "../_constants";

const Acknowledgement = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{acknowledgement.title}</h1>
      {acknowledgement.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
      <p className="font-semibold tracking-tight text-primary-foreground my-6">Connect</p>
    </div>
  );
};

export default Acknowledgement;
