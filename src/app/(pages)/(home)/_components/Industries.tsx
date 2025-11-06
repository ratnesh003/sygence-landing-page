"use client";

import React from "react";

import { industries } from "../_constants";

import Border from "@/components/Border";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Industries = () => {
  return (
    <Border>
      <Tabs className="w-full min-h-96">
        <TabsList defaultValue={industries.cards[0].header}>
          {industries.cards.map((card, idx) => (
            <TabsTrigger value={card.header} key={idx + 1}>
              {card.header}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="px-3">
          {industries.cards.map((card, idx) => (
            <TabsContent
              value={card.header}
              key={idx + 1}
              defaultChecked={!idx}
            >
              {card.header}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </Border>
  );
};

export default Industries;
