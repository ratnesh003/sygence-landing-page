import React from "react";
import { specialcases } from "../_constants";

const SpecialCases = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">
        {specialcases.title}
      </h2>
      <h3 className="tracking-tight font-bold mb-6">{specialcases.subtitle}</h3>

      <ol>
        {specialcases.list.map((item, index) => (
          <li key={index}>
            <p>
              {item.heading} : {item.text}
            </p>

            {item.bullets && (
              <ul className="list-disc pl-8">
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default SpecialCases;
