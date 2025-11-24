"use client";
import React from "react";

import Border from "@/components/Border";
import Image from "next/image";
import { hero } from "../_constants";

const Hero = () => {
  return (
    <Border className="relative overflow-hidden py-20 z-0">
      {/* TEXT CONTENT */}
      <h1 className="relative z-10 text-4xl md:text-5xl xl:text-7xl font-medium tracking-tighter w-full xl:w-3xl">
        {hero.title}
      </h1>

      <p className="relative z-10 w-full xl:w-3xl mt-8 tracking-wider">
        {hero.description}
      </p>

      {/* MOBILE IMAGE — BELOW TEXT */}
      <div className="block lg:hidden mt-10 relative z-0">
        <Image
          src={hero.bgImage}
          alt="Hero Banner"
          width={100}
          height={100}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* DESKTOP IMAGE — ABSOLUTE, BEHIND CONTENT */}
      <div className="hidden lg:block absolute right-0 top-3/5 -translate-y-1/2 -z-10 w-[40%]">
        <Image
          src={hero.bgImage}
          alt="Hero Banner"
          width={100}
          height={100}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </Border>
  );
};

export default Hero;
