import React from "react";
import { collection } from "../_constants";

const Collection = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">
        {collection.title}
      </h2>

      {collection.sections.map((sec, idx) => (
        <div key={idx}>
          <p>{sec.subtitle}</p>

          {sec.list && (
            <ul className="list-disc pl-4.5 mb-6">
              {sec.list.map((item, li) => (
                <li key={li}>{item}</li>
              ))}
            </ul>
          )}

          {sec.table && (
            <table className="mt-6">
              <thead>
                <tr className="bg-[#F1F3F9]">
                  {sec.table.headers.map((h, hi) => (
                    <th key={hi}>{h}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {sec.table.rows.map((row, ri) => (
                  <tr key={ri} className={ri % 2 ? "bg-[#F1F3F9]" : ""}>
                    <td>{row.source}</td>
                    <td>
                      <ul className="list-decimal">
                        {row.details.map((d, di) => {
                          const letter = String.fromCharCode(97 + di); // 97 = 'a'
                          return (
                            <li key={di} className="inline">
                              ({letter}.) {d}
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </section>
  );
};

export default Collection;
