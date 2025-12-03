"use client";
import React from "react";

import Border from "@/components/Border";
import { hero } from "../_constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <Border className="relative overflow-hidden py-20 z-0">
      {/* TEXT CONTENT */}
      <h1 className="relative w-full xl:w-4xl text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight">
        Transform{" "}
        <span className="text-primary-foreground">your enterprise</span> and{" "}
        <span className="text-primary-foreground">your network</span> - into an{" "}
        <span className="text-primary-foreground">unstoppable force.</span>
      </h1>

      <Link href="/contact">
        <Button className="text-primary bg-primary-foreground hover:bg-primary-foreground/90 mt-6 relative z-10">
          Request a Demo
        </Button>
      </Link>

      {/* IMAGE (MOBILE) */}
      <div className="block md:hidden mt-10 relative z-0">
        <Image
          src={hero.bgImage}
          alt="Hero Banner"
          height={100}
          width={100}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* IMAGE (DESKTOP) */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[45%] -z-10">
        <Image
          src={hero.bgImage}
          alt="Hero Banner"
          height={100}
          width={100}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </Border>
  );
};

export default Hero;
