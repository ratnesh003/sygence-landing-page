import React from "react";
import { indemnification } from "../_constants";

const Indemnification = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">
        {indemnification.title}
      </h1>
      {indemnification.content.map((paragraph, index: number) => (
        <div key={index}>
          <h1
            className={
              index === 0
                ? "font-sans font-normal tracking-normal mb-6"
                : "text-xl tracking-tight font-medium mb-6"
            }
          >
            {paragraph.header}
          </h1>
          {paragraph.para && (
            <p className="tracking-tight">{paragraph.para}</p>
          )}
          {paragraph.points && (
            <ul className="list-decimal pl-6 mb-6">
              {paragraph.points.map((pts, idx) => (
                <li key={idx}>{pts}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Indemnification;
