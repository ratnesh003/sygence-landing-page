"use client";

import { useState, useEffect } from "react";
import { nexNetOverview } from "../_constants";
import Border from "@/components/Border";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NexNetOverview() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % nexNetOverview.cards.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const activeCard = nexNetOverview.cards[activeIndex];

  return (
    <Border>
      <div className="flex flex-col item-center justify-center w-full">
        <h1 className="text-2xl md:text-5xl tracking-tight font-medium text-center w-full mb-6">
          {nexNetOverview.title}
        </h1>
        <p className="text-center w-full tracking-tight mb-6 md:mb-20">
          {nexNetOverview.description}
        </p>
        <button className="mb-12 text-sm tracking-tight font-medium border border-gray-500 hover:scale-105 w-fit self-center px-4 py-2 rounded-md md:hidden">
          Explore NexNet →
        </button>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="relative w-full h-[100vw] md:w-[500px] md:h-[500px] flex items-center justify-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="hidden md:block absolute rounded-full border border-dashed border-blue-200"
                style={{
                  width: `${150 + i * 80}px`,
                  height: `${150 + i * 80}px`,
                }}
              />
            ))}

            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="md:hidden absolute rounded-full border border-dashed border-blue-200"
                style={{
                  width: `${100 + i * 60}px`,
                  height: `${100 + i * 60}px`,
                }}
              />
            ))}
            <Image
              src={"/assets/components/Logo.svg"}
              alt="logo"
              height={100}
              width={100}
              className="w-20 h-20 md:w-30 md:h-30"
            />

            {nexNetOverview.cards.map((card, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`absolute ${card.pos} transition-all duration-500 ${
                  activeIndex === i
                    ? "bg-primary-foreground text-white scale-110 shadow-lg"
                    : "bg-white text-gray-800 scale-100"
                } border rounded-md md:rounded-lg px-2 py-1 md:px-4 md:py-2 shadow-md text-[8px] md:text-xs whitespace-nowrap font-medium flex items-center justify-center gap-1 md:gap-3 hover:cursor-pointer text-center align-middle`}
              >
                <Image
                  src={card.icon}
                  alt={card.header}
                  height={16}
                  width={16}
                  className={`w-2.5 h-2.5 md:w-4 md:h-4 ${activeIndex === i ? "brightness-0 invert" : ""}`}
                />
                {card.header}
              </button>
            ))}
          </div>
          <div className="text-center lg:text-left w-full md:w-lg">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-900 transition-all duration-500 line-clamp-1">
              {nexNetOverview.cards[activeIndex].header}
            </h2>
            <p className="text-gray-600 md:text-lg leading-relaxed mb-8 transition-all duration-500 line-clamp-4">
              {nexNetOverview.cards[activeIndex].content}
            </p>
            <Link href={"/solutions"}>
              <button className="hidden md:block bg-primary-foreground text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary-foreground/90 hover:shadow-xl transition-all duration-300 font-medium hover:cursor-pointer">
                Explore NexNet →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Border>
  );
}
