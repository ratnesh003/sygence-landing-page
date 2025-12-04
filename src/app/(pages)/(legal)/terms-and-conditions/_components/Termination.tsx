import React from "react";
import { termination } from "../_constants";

const Termination = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{termination.title}</h1>
      {termination.content.map((paragraph, index: number) => (
        <div key={index}>
          <p className={index === 1 || index === 4 ? "mb-0" : "mb-6"}>{paragraph.header}</p>
          {paragraph.para && (
            <div>
              {paragraph.para.map((content, idx) => (
                <p key={idx}>{content}</p>
              ))}
            </div>
          )}
          {paragraph.points && (
            <ul className={`${index === 1 ? "list-decimal pl-7" : "list-disc pl-5"} mb-6`}>
              {paragraph.points.map((pts, i) => (
                <li key={i}>{pts}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Termination;
