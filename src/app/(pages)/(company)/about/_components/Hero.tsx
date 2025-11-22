import React from "react";

import Border from "@/components/Border";
import Image from "next/image";
import { hero } from "../_constants";
const Hero = () => {
  return (
    <Border className="relative overflow-hidden py-20 bg-gradient-to-br from-[#5b89c2] via-[#6dabde] to-[#5e8fc8] text-primary">
      {/* TEXT CONTENT */}
      <h1 className="relative z-5 text-7xl font-medium tracking-tighter w-3xl">
        {hero.title}
      </h1>
      <p className="w-3xl mt-8 tracking-wider">
        {hero.subtitle}
      </p>

      {/* IMAGE - CENTER LEFT */}
      <div className="absolute right-0 top-1/3 -translate-y-1/2 z-1 h-[80%]">
        <Image
          src={"/assets/company/about/hero-banner.svg"}
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
