import React from "react";
import { obligations } from "../_constants";

const Obligations = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{obligations.title}</h1>
      {obligations.content.map((paragraph, index) => (
        <div key={index}>
          <p>{paragraph.header}</p>
          {paragraph.points && (
            <ul className="list-disc pl-7">
              {paragraph.points.map((content, idx) => (
                <li key={idx} className={idx === paragraph.points.length - 1 ? "mb-6" : ""}>
                  {content}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Obligations;
