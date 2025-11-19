import React from "react";
import { privacyChanges } from "../_constants";

const PrivacyChanges = () => {
  return (
    <section>
      <h2>{privacyChanges.title}</h2>

      {privacyChanges.content.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </section>
  );
};

export default PrivacyChanges;
