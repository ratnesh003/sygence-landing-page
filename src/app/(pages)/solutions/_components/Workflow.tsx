"use client";
import Border from "@/components/Border";
import React, { useEffect, useState, useRef } from "react";
import { workflow } from "../_constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const Workflow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pauseRef = useRef(false);

  const accordionItems = workflow.cards; // clean reference

  /** Auto rotation **/
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseRef.current) {
        setActiveIndex((prev) => (prev + 1) % accordionItems.length);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  /** Manual user click override **/
  const handleUserClick = (val: string) => {
    const index = parseInt(val);
    if (!isNaN(index)) {
      setActiveIndex(index);
      pauseRef.current = true;

      setTimeout(() => {
        pauseRef.current = false;
      }, 6000);
    }
  };

  return (
    <Border>
      <div className="w-full h-full flex">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col">
          <h1 className="text-2xl tracking-tight font-medium md:text-5xl mb-6">
            {workflow.title}
          </h1>
          <p className="mb-6">{workflow.description}</p>

          <div className="flex-1 flex items-center">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={`${activeIndex}`}
              onValueChange={(val) => handleUserClick(val)}
            >
              {workflow.cards.map((card, index) => (
                <AccordionItem key={index} value={`${index}`}>
                  <AccordionTrigger>{card.header}</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance overflow-auto max-h-32">
                    <p>{card.challenges}</p>
                    <p>{card.challenges}</p>
                    <p>{card.challenges}</p>
                    <p>{card.challenges}</p>
                    <p>{card.challenges}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 hidden md:block bg-accent min-h-screen">
          <div className="h-full w-full p-16 rounded-3xl">
            <Image
              src={workflow.cards[activeIndex].image}
              height={100}
              width={100}
              alt={workflow.cards[activeIndex].header}
              className="duration-500 w-full object-contain"
            />
          </div>
        </div>
      </div>
    </Border>
  );
};

export default Workflow;
