import React from "react";

import Border from "@/components/Border";
import Image from "next/image";
import { hero } from "../_constants";

const Hero = () => {
  return (
    <Border className="relative overflow-hidden py-20 bg-gradient-to-br from-[#5b89c2] via-[#6dabde] to-[#5e8fc8] text-primary z-0 h-screen lg:h-[80vh]">
      
      {/* TEXT CONTENT */}
      <h1 className="relative z-10 text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter w-full xl:w-xl">
        {hero.title}
      </h1>

      <p className="relative z-10 w-full xl:w-xl mt-8 tracking-wider">
        {hero.subtitle}
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
      <div className="hidden lg:block absolute right-0 top-1/3 -translate-y-1/2 -z-10 h-[80%]">
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
