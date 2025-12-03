import React from "react";
import { legalbasis } from "../_constants";

const LegalBasis = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">{legalbasis.title}</h2>
      <p className="tracking-tight">{legalbasis.intro}</p>

      <ol className="list-decimal pl-5">
        {legalbasis.list.map((item, index) => (
          <li key={index}>
            {typeof item === "string" && item}

            {typeof item === "object" && (
              <>
                <p>{item.heading}</p>
                <ul className="list-disc pl-5">
                  {item.subpoints.map((sp, i) => (
                    <li key={i}>{sp}</li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ol>

      <p className="my-6">{legalbasis.note}</p>
      <p>{legalbasis.footer}</p>
    </section>
  );
};

export default LegalBasis;
