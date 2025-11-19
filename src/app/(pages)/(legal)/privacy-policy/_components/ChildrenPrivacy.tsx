import React from "react";
import { childrenPrivacy } from "../_constants";

const ChildrenPrivacy = () => {
  return (
    <section>
      <h2>{childrenPrivacy.title}</h2>

      {childrenPrivacy.content.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </section>
  );
};

export default ChildrenPrivacy;
