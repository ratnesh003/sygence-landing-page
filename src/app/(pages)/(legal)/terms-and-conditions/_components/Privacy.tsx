import React from "react";
import { privacy } from "../_constants";

const Privacy = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">{privacy.title}</h1>
      {privacy.content.map((paragraph, index: number) => (
        <div key={index}>
          <p className={`${index === 1 || index === 0 ? "font-medium": "font-normal"} ${index === 3 || index === privacy.content.length - 1 ? "mb-0" : "mb-6"}`}>{paragraph.header}</p>
          {paragraph.subheader && (
            <p className="mb-6">{paragraph.subheader}</p>
          )}
          {paragraph.points && (
            <ul className="list-disc pl-7">
              {paragraph.points.map((content, idx) => (
                <li key={idx} className={idx === paragraph.points.length - 1 ? "mb-6": ""}>{content}</li>
              ))}
            </ul>
          )}
          {paragraph.para && (
            <ul>{paragraph.para.map((pts, i) => (
              <p key={i} className="mb-6" >{pts}</p>
            ))}</ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Privacy;
