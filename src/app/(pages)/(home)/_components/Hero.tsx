import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <React.Fragment>
      <section className="flex flex-col justify-center items-center xl:h-[100vh]">
        <h1>Hero Section Main Text</h1>
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
