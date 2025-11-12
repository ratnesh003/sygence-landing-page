"use client";

import React, { useState } from "react";
import Image from "next/image";
import { industries } from "../_constants"; // same structure as before
import Border from "@/components/Border";

const Dashboard = () => {
  const [activeSector, setActiveSector] = useState(industries.cards[0]);

  return (
    <Border>
      {/* Header Section */}
      <div className="w-full flex flex-col items-center">
        <div className="text-center max-w-4xl mb-20">
          <h1 className="text-5xl font-semibold tracking-tight mb-6">
            {industries.title}
          </h1>
          <p className="text-lg">{industries.description}</p>
        </div>

        {/* Horizontal Navigation */}
        <div className="flex flex-wrap justify-center self-start gap-8 mt-10">
          {industries.cards.map((sector, idx) => (
            <button
              key={idx}
              className={`text-base font-medium ${
                activeSector.header === sector.header
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 hover:text-black border-b-2 border-transparent"
              } transition-all`}
              onClick={() => setActiveSector(sector)}
            >
              {sector.header}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center mt-12 gap-20 w-full max-w-6xl">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-md">
              <Image
                src={activeSector.image}
                alt={activeSector.header}
                width={600}
                height={400}
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-6">
              {activeSector.header}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Challenges</h3>
                <p className="mt-2 tracking-tighter">
                  {activeSector.challenges}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Sygence Solution</h3>
                <p className="mt-2 tracking-tighter">{activeSector.solution}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Impact</h3>
                <p className="mt-2 tracking-tighter">{activeSector.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Border>
  );
};

export default Dashboard;
