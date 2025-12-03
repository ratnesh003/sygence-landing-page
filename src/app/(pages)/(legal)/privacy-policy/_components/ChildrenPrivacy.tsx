import React from "react";
import { childrenPrivacy } from "../_constants";

const ChildrenPrivacy = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">
        {childrenPrivacy.title}
      </h2>

      <p>
        {childrenPrivacy.content}{" "}
        <a className="underline" href={`mailto:${childrenPrivacy.mail}`}>
          {childrenPrivacy.mail}
        </a>{" "}
        .
      </p>
    </section>
  );
};

export default ChildrenPrivacy;
