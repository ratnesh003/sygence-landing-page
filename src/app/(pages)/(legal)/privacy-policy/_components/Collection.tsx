import React from "react";
import { collection } from "../_constants";

const Collection = () => {
  return (
    <section>
      <h2>{collection.title}</h2>

      {collection.sections.map((sec, idx) => (
        <div key={idx}>
          <h3>{sec.subtitle}</h3>

          {sec.body && <p>{sec.body}</p>}

          {sec.list && (
            <ul>
              {sec.list.map((item, li) => (
                <li key={li}>{item}</li>
              ))}
            </ul>
          )}

          {sec.table && (
            <table>
              <thead>
                <tr>
                  {sec.table.headers.map((h, hi) => (
                    <th key={hi}>{h}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {sec.table.rows.map((row, ri) => (
                  <tr key={ri}>
                    <td>{row.source}</td>
                    <td>
                      <ul>
                        {row.details.map((d, di) => (
                          <li key={di}>{d}</li>
                        ))}
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
