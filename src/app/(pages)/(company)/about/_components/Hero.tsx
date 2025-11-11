import React from "react";

import Border from "@/components/Border";
import Image from "next/image";

const Hero = () => {
  return (
    <Border className="relative overflow-hidden py-20 bg-gradient-to-br from-[#5b89c2] via-[#6dabde] to-[#5e8fc8]">
      {/* TEXT CONTENT */}
      <h1 className="relative z-5 text-7xl font-medium tracking-tighter w-3xl">
        Help us build the future of enterprise networks.
      </h1>
      <p className="w-3xl mt-8 tracking-wider">
        At Sygence, we’re reimagining how global supply networks operate. Our
        mission is to build the network-native orchestration platform that will
        power the next era of connected, intelligent enterprises. To achieve
        this vision, we’re seeking individuals who are ready to make an impact
        and grow with us.
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
