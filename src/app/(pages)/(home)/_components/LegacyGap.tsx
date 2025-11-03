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

  return (
    <React.Fragment>
      <Border>
        <div className="flex flex-row gap-8">
          {cards.map((card, id) => (
            <Card key={id + 1} className="w-96">
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
