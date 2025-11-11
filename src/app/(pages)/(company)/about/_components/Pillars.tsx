import React from "react";

import Border from "@/components/Border";
import { pillars } from "../_constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pillars = () => {
  return (
    <React.Fragment>
      <Border className="bg-accent">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-medium tracking-tighter text-center mb-6">
            {pillars.title}
          </h1>
          <p className="w-3xl text-center mb-20">{pillars.description}</p>
          <div className="flex flex-row justify-center items-stretch gap-8">
            {pillars.cards.map((card, id) => (
              <Card
                key={id + 1}
                className="w-96 hover:scale-105 hover:ring-[1px] hover:ring-primary-foreground h-auto"
              >
                <CardHeader>
                  <CardTitle className="font-mono">{card.header}</CardTitle>
                </CardHeader>
                <CardContent>{card.content}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Border>
    </React.Fragment>
  );
};

export default Pillars;
