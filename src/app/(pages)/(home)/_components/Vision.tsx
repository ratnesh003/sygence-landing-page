"use client";

import React from "react";
import Image from "next/image";
import Border from "@/components/Border";
import { vision } from "../_constants";

const Vision = () => {
  const { title, description, content, outcomes, value } = vision;

  return (
    <Border>
      <div className="w-full flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-4xl mb-16">
          <h1 className="text-5xl font-semibold tracking-tight">{title}</h1>
          <p className="text-gray-600 text-lg mt-3">{description}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
          <div className="flex flex-col item-center justify-center gap-8">
            {/* Left Blue Box */}
            <div className="bg-primary-foreground text-white rounded-2xl p-8 flex items-center justify-center">
              <p className="text-lg leading-relaxed">{content}</p>
            </div>

            {/* Tangible Outcomes */}
            <div className="rounded-2xl border border-blue-100 p-8 bg-white">
              <div className="flex flex-col items-start gap-4 mb-4">
                <Image
                  src={outcomes.icon}
                  height={48}
                  width={48}
                  alt={`${outcomes.title} image`}
                  className=""
                />
                <h3 className="text-2xl font-semibold">{outcomes.title}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-0">
                {outcomes.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Value for C-Suite */}
          <div className="rounded-2xl border border-blue-100 bg-white">
            <div className="rounded-t-2xl overflow-hidden">
              <Image
                src={value.image} // replace with your uploaded image path
                alt="C-Suite"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col items-start gap-4 p-8">
              <Image
                src={value.icon}
                height={48}
                width={48}
                alt={`${value.title} image`}
                className=""
              />
              <h3 className="text-5xl font-semibold">{value.title}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-0 p-8 pt-0">
              {value.list.map((item, idx) => (
                <li key={idx}><b>{item.head}</b>{item.content}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Border>
  );
};

export default Vision;
