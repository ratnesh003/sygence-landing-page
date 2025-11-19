import React from "react";
import { furtherInformation } from "../_constants";

const FurtherInformation = () => {
  return (
    <section>
      <h2>{furtherInformation.title}</h2>

      {furtherInformation.content.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </section>
  );
};

export default FurtherInformation;
