import React from "react";
import { legalbasis } from "../_constants";

const LegalBasis = () => {
  return (
    <section>
      <h2>{legalbasis.title}</h2>
      <p>{legalbasis.intro}</p>

      <ol>
        {legalbasis.list.map((item, index) => (
          <li key={index}>
            {typeof item === "string" && item}

            {typeof item === "object" && (
              <>
                <p>{item.heading}</p>
                <ul>
                  {item.subpoints.map((sp, i) => (
                    <li key={i}>{sp}</li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ol>

      <p>{legalbasis.note}</p>
      <p>{legalbasis.footer}</p>
    </section>
  );
};

export default LegalBasis;
