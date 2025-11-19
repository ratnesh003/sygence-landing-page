import React from "react";
import { websiteCookies } from "../_constants";

const WebsiteCookies = () => {
  return (
    <section>
      <h2>{websiteCookies.title}</h2>

      {websiteCookies.sections.map((section, index) => (
        <div key={index}>
          <h3>{section.subtitle}</h3>
          {section.content.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      ))}
    </section>
  );
};

export default WebsiteCookies;
