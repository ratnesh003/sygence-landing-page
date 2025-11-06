import React from "react";

import { legacyGap } from "../_constants";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Border from "@/components/Border";

interface CardsProps {
  header: string,
  content: string
}

const LegacyGap = () => {
  const cards: CardsProps[] = legacyGap.cards;
  const title: string = legacyGap.title

  return (
    <React.Fragment>
      <Border className="bg-accent">
        <h1 className="text-6xl font-medium tracking-tighter text-center mb-20">{title}</h1>
        <div className="flex flex-row justify-center items-center gap-8">
          {cards.map((card, id) => (
            <Card key={id + 1} className="w-96 hover:scale-105 hover:ring-[1px] hover:ring-primary-foreground">
              <CardHeader>
                <CardTitle className="font-mono">{card.header}</CardTitle>
              </CardHeader>
                <CardContent>{card.content}</CardContent>
            </Card>
          ))}
        </div>
      </Border>
    </React.Fragment>
  );
};

export default LegacyGap;
