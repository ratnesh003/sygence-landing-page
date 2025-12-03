import React from "react";

import { Button } from "@/components/ui/button";

import { hero } from "../_constants"
import Link from "next/link";
import ParticleBackground from "./ParticleBackground";
import RequestDemo from "./RequestDemo";

const Hero = () => {
  return (
    <React.Fragment>
      <section className="relative flex flex-col justify-center items-center h-screen gap-6">
        <ParticleBackground />
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-medium tracking-tight text-center text-primary w-80 md:w-md xl:w-2xl">{hero.title}</h1>
        <p className="text-primary text-center w-80 xl:w-2xl">{hero.subtitle}</p>
        <div className="flex justify-between bg-transparent items-center gap-4 m-4">
          {/* <Link href={hero.ctaLink1}>
            <Button variant={"default"} size={"lg"} className="text-black">
                {hero.catText1}
            </Button>
          </Link> */}
          <RequestDemo trigger={hero.catText1}/>
          <Link href={hero.catLink2}>
            <Button variant={"blur"} size={"lg"}>
                {hero.catText2}
            </Button>
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
