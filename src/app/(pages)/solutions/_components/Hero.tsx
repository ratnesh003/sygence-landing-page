"use client";
import React from "react";

import Border from "@/components/Border";
import * as heroBanner from "@/assets/solutions/hero-banner.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <Border className="relative overflow-hidden py-20">
      {/* TEXT CONTENT */}
      <h1 className="relative z-10 text-7xl font-medium tracking-tight">
        Transform{" "}
        <span className="text-primary-foreground">your enterprise</span> and{" "}
        <span className="text-primary-foreground">your network</span> - into an{" "}
        <span className="text-primary-foreground">unstoppable force.</span>
      </h1>
      <Link href="/contact">
        <Button className="text-primary bg-primary-foreground hover:bg-primary-foreground/90 mt-6">Request a Demo</Button>
      </Link>
      {/* IMAGE - CENTER LEFT */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 -z-10 w-[45%]">
        <Image
          src={heroBanner}
          alt="Hero Banner"
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </Border>
  );
};

export default Hero;
