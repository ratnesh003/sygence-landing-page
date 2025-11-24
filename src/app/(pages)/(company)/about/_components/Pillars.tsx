import React from "react";

import Border from "@/components/Border";
import { pillars } from "../_constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const Pillars = () => {
  return (
    <React.Fragment>
      <Border className="bg-accent">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-medium tracking-tighter text-center mb-6">
            {pillars.title}
          </h1>
          <p className="w-full lg:w-3xl text-center mb-20">
            {pillars.description}
          </p>
          <div className="flex flex-col xl:flex-row justify-center items-stretch gap-8">
            {pillars.cards.map((card, id) => (
              <div key={id} className="relative flex flex-col h-auto">
                <Image
                  src={card.icon}
                  width={card.width}
                  height={145}
                  alt="number icon"
                  className="absolute -top-10 -left-7 -z-10"
                />

                <Card className="relative w-80 lg:w-96 h-full flex flex-col hover:scale-105 hover:ring-[1px] hover:ring-primary-foreground">
                  <CardHeader>
                    <CardTitle className="font-mono font-normal text-xl lg:text-3xl -mb-6">
                      {card.header}
                    </CardTitle>
                  </CardHeader>

                  {/* This pushes content to fill available height */}
                  <CardContent className="flex-1">{card.content}</CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Border>
    </React.Fragment>
  );
};

export default Pillars;
