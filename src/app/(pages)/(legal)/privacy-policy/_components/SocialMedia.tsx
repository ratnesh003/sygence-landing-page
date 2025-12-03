import React from "react";
import { socialMedia } from "../_constants";

const SocialMedia = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">{socialMedia.title}</h2>

      {socialMedia.content.map((line, index) => (
        <p className="inline" key={index}>{line}</p>
      ))}
    </section>
  );
};

export default SocialMedia;
