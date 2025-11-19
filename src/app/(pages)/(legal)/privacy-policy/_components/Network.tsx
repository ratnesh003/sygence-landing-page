import React from "react";

import { network } from "../_constants";

const Network = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold tracking-tight my-6">
        {network.title}
      </h2>

      <ol className="list-decimal tracking-tight pl-4.5">
        {network.points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ol>
    </section>
  );
};

export default Network;
