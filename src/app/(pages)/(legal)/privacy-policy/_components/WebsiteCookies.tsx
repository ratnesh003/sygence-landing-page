import React from "react";
import { websiteCookies } from "../_constants";

const WebsiteCookies = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">
        {websiteCookies.title}
      </h2>
      <ol className="list-decimal pl-5">
        {websiteCookies.sections.map((section, index) => (
          <li key={index} className="mb-6">
            <p>{section.subtitle}</p>

            {section.purpose && (
              <div>
                <p className="mt-6 -ml-5">{section.purpose.title}</p>
                <ul className="list-disc pl-3">
                  {section.purpose.content.map((content, idx) => (
                    <li key={idx + 1}>{content}</li>
                  ))}
                </ul>
              </div>
            )}

            <ul className="list-disc pl-5 mb-6">
              {section.content &&
                section.content.map((line, i) => (
                  <li key={i} className="pl-4.5">
                    {line}
                  </li>
                ))}
            </ul>

            {section.para && section.para.map((content, idx) => (
              <p key={idx} className="mb-6 -ml-5">{content}</p>
            ))}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default WebsiteCookies;
