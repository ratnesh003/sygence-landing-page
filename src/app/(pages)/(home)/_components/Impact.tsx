"use client";

import React from "react";
import Image from "next/image";
import { impact } from "../_constants";
import Border from "@/components/Border";

interface CardProps {
  header: string;
  icon: string;
}

const Impact = () => {
  const { title, description, cards, bgImage } = impact;

  return (
    <Border className="relative items-center justify-center py-28 bg-accent overflow-hidden">
      {/* Heading */}
      <div
        className="flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "contain",
        }}
      >
        <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            {title}
          </h2>
          <p className=" text-lg leading-relaxed max-w-2xl">{description}</p>
        </div>

        {/* Main Visual */}
        <div className="relative w-full flex justify-center h-96 p-20">
          <div className="absolute -top-20 flex items-center justify-center h-72">
            <Image
              src="/assets/components/Logo.svg"
              alt="Sygence Logo"
              width={120}
              height={120}
              className="drop-shadow-md"
            />
          </div>

          {/* Cards Positioned Around */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Use absolute positions to distribute cards */}
            <div className="absolute -top-10">
              <Card item={cards[2]} /> {/* End-to-End Orchestration */}
            </div>

            <div className="absolute left-0 top-16">
              <Card item={cards[0]} /> {/* Partner Activation */}
            </div>

            <div className="absolute left-10 bottom-0">
              <Card item={cards[1]} /> {/* Assured Compliance */}
            </div>

            <div className="absolute right-0 top-16">
              <Card item={cards[3]} /> {/* Unified Flows */}
            </div>

            <div className="absolute right-10 bottom-0">
              <Card item={cards[4]} /> {/* Proactive Resilience */}
            </div>
          </div>
        </div>
      </div>
    </Border>
  );
};

const Card = ({ item }: { item: CardProps }) => (
  <div className="flex items-center gap-2 bg-white shadow-md hover:shadow-xl px-4 py-2 rounded-xl border border-gray-100 transition-transform hover:-translate-y-1">
    <Image src={item.icon} alt={item.header} width={18} height={18} />
    <span className="text-gray-700 text-sm font-medium">{item.header}</span>
  </div>
);

export default Impact;
