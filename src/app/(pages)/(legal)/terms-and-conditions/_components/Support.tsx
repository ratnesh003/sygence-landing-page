import React from "react";
import { support } from "../_constants";

const Support = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight my-6">
        {support.title}
      </h1>
      <p className="mb-6">{support.description}</p>
      {support.content.map((paragraph, index: number) => (
        <div key={index}>
          <p
            className={
              index === 0
                ? "font-mono text-xl tracking-tight font-medium mb-6"
                : ""
            }
          >
            {paragraph.header}
          </p>
          {paragraph.para && <p className="mb-6">{paragraph.para}</p>}
          {paragraph.table && (
            <table className="w-full mb-6">
              <thead>
                <tr className="bg-[#F1F3F9] text-left">
                  {paragraph.table.header.map((ctx, j) => (
                    <th className="p-2.5 text-sm" key={j}>{ctx}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paragraph.table.values.map((content, i) => (
                  <tr key={i} className={i % 2 ? "bg-[#F8F9FC]" : ""}>
                    {Object.values(content).map((val, idx) => (
                      <td className="p-2.5 text-sm" key={idx}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {paragraph.category && (
            <div>
              <p className="mb-6">{paragraph.category.title}</p>
              {paragraph.category.cards.map((cnt, ind) => (
                <p key={ind} className="font-bold tracking-tight mb-6">{cnt.header}</p>
              ))}
            </div>
          )}
          {paragraph.points && (
            <ul className="list-decimal pl-6 mb-6">
              {paragraph.points.map((content, idx) => (
                <li key={idx}>{content}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Support;
