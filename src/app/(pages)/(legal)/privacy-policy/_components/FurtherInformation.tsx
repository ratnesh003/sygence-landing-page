import React from "react";
import { furtherInformation } from "../_constants";

const FurtherInformation = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">{furtherInformation.title}</h2>

      {furtherInformation.content.map((line, index) => (
        <p key={index}>{line}{" "}
          {!index && (
            <a className="underline" href={`mailto:${furtherInformation.mail}`}>{furtherInformation.mail}</a>
          )}
          {" "}.
        </p>
      ))}
    </section>
  );
};

export default FurtherInformation;
