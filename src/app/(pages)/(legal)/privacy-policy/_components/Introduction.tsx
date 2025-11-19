import React from "react";

import { introduction } from "../_constants";

const Introduction = () => {
  return (
    <div>
      <h1 className="text-5xl font-medium tracking-tighter mb-6">
        {introduction.title}
      </h1>
      <p className="font-medium tracking-tighter mb-6">
        Effective Date: {introduction.date}
      </p>
      <h1 className="text-2xl font-medium tracking-tight mb-6">
        A. Introduction
      </h1>
      <ol className="list-decimal pl-4.5">
        {introduction.content.map((content, idx) => (
          <li key={idx + 1}>{content}</li>
        ))}
      </ol>
    </div>
  );
};

export default Introduction;
