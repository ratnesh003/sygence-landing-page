import React from "react";
import { fees } from "../_constants";

const Fees = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">
        {fees.title}
      </h1>
      {fees.content.map((paragraph, index: number) => (
        <div key={index}>
          <p className="mb-6 font-medium tracking-tight">{paragraph.header}</p>
          <ul className={`${index === 0 ? "mb-6" : "mb-0"} list-disc pl-6`}>
            {paragraph.points.map((content, idx) => (
              <li key={idx}>{content}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Fees;
