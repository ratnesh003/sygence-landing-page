import AnimatedNetworkBackground from "@/app/(pages)/(home)/_components/AnimatedNetworkBackground";
import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <React.Fragment>
      <section className="flex flex-col justify-center items-center h-[100vh]">
        {/* <AnimatedNetworkBackground /> */}
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight text-center">Hero Section<br/> Main Text</h1>
        <p>Hero Section Supporting text</p>
        <div className="flex justify-between bg-transparent items-center gap-4 m-4">
            <Button variant={"default"}>
                CTA 1
            </Button>
            <Button variant={"outline"}>
                CTA 2
            </Button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
