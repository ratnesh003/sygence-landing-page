import React from "react";
import { confidentiality } from "../_constants";

const Confidentiality = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">
        {confidentiality.title}
      </h1>
      {confidentiality.content.map((paragraph, index: number) => (
        <div key={index}>
          {paragraph.header && <p className="mb-6">{paragraph.header}</p>}
          {paragraph.subheader && <p className="mb-6">{paragraph.subheader}</p>}
          {paragraph.para && <p>{paragraph.para}</p>}
          {paragraph.points && (
            <ul className="list-decimal pl-6 mb-6">
              {paragraph.points.map((content, idx) => (
                <li key={idx}>{content}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Confidentiality;
