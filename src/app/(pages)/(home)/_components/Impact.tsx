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
    <Border className="relative py-28 bg-accent overflow-hidden">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-center max-w-4xl mx-auto mb-20 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            {title}
          </h2>
          <p className=" text-lg leading-relaxed max-w-2xl">{description}</p>
        </div>
        <div
          className="flex flex-col items-center justify-center h-[60vh] md:h-[90vh] lg:h-[100vh] w-[100vw] md:w-[75vw] lg:w-[65vw]"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            backgroundSize: "contain",
          }}
        >
          {/* Main Visual */}
          <div className="relative w-full flex self-center justify-center h-screen p-20">
            <div className="absolute top-30 flex items-center justify-center w-32 md:w-52 lg:w-60">
              <Image
                src="/assets/components/Logo.svg"
                alt="Sygence Logo"
                width={120}
                height={120}
                className="drop-shadow-md object-contain bg-no-repeat w-full"
              />
            </div>

            {/* Cards Positioned Around */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Use absolute positions to distribute cards */}
              <div className="absolute top-0 md:-top-10">
                <Card item={cards[2]} /> {/* End-to-End Orchestration --> center top */}
              </div>

              <div className="absolute left-5 top-15 md:left-10 md:top-16">
                <Card item={cards[0]} /> {/* Partner Activation --> left top */}
              </div>

              <div className="absolute left-0 top-30 md:-left-20 md:top-50">
                <Card item={cards[1]} /> {/* Assured Compliance --> left bottom */}
              </div>

              <div className="absolute right-5 top-15 md:right-10 md:top-16">
                <Card item={cards[3]} /> {/* Unified Flows --> right top */}
              </div>

              <div className="absolute right-0 top-30 md:-right-20 md:top-50">
                <Card item={cards[4]} /> {/* Proactive Resilience --> right bottom */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Border>
  );
};

const Card = ({ item }: { item: CardProps }) => (
  <div className="flex items-center gap-2 bg-white shadow-md hover:shadow-xl px-2 py-1 md:px-4 md:py-2 rounded-xl border border-gray-100 transition-transform hover:-translate-y-1">
    <Image src={item.icon} alt={item.header} width={18} height={18} className="h-3 w-3 md:h-5 md:w-5"/>
    <span className="text-gray-700 text-xs md:text-sm font-medium">{item.header}</span>
  </div>
);

export default Impact;
