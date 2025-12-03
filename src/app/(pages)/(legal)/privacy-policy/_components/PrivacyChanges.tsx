import React from "react";
import { privacyChanges } from "../_constants";
import { cn } from "@/lib/utils";

const PrivacyChanges = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">{privacyChanges.title}</h2>

      {privacyChanges.content.map((line, index) => (
        <p className="inline" key={index}>{line}{" "}
        <a className={cn("underline", index == privacyChanges.content.length - 1 ? "" : "hidden")} href={`mailto${privacyChanges.mail}`}>{privacyChanges.mail}</a>
        </p>
      ))}
    </section>
  );
};

export default PrivacyChanges;
