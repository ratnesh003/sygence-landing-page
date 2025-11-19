import React from "react";
import { socialMedia } from "../_constants";

const SocialMedia = () => {
  return (
    <section>
      <h2>{socialMedia.title}</h2>

      {socialMedia.content.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </section>
  );
};

export default SocialMedia;
