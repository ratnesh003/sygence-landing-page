import React from "react";
import { dispute } from "../_constants";

const Dispute = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{dispute.title}</h1>
      {dispute.content.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Dispute;
