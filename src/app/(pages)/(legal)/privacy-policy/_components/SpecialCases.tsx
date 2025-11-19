import React from "react";
import { specialcases } from "../_constants";

const SpecialCases = () => {
  return (
    <section>
      <h2>{specialcases.title}</h2>
      <h3>{specialcases.subtitle}</h3>

      <ol>
        {specialcases.list.map((item, index) => (
          <li key={index}>
            <h4>{item.heading}</h4>
            <p>{item.text}</p>

            {item.bullets && (
              <ul>
                {item.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}

            {item.footer && <p>{item.footer}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default SpecialCases;
