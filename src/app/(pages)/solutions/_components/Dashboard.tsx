"use client";
import Border from "@/components/Border";
import React, { useState } from "react";

export interface DeliverableCard {
  header: string;
  subheader: string;
  nav: string;
  paras: string[];
  capabilities: string[];
}

export interface DeliverablesData {
  title: string;
  description: string;
  cards: DeliverableCard[];
}

interface NexNetDashboardProps {
  data: DeliverablesData;
}

const NexNetDashboard: React.FC<NexNetDashboardProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { title, description, cards } = data;

  return (
    <Border>
      <div className="max-w-7xl mx-auto" id="nexnet">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-gray-600 text-lg">{description}</p>
        </header>

        <div className="flex gap-12">
          {/* Sidebar Navigation */}
          <nav className="w-60 flex-shrink-0 border-r border-gray-200 pr-4">
            <ul className="space-y-4">
              {cards.map((card, index) => (
                <li key={index}>
                  <button
                    className={`flex items-center gap-2 text-left w-full text-sm font-medium transition-colors duration-200 ${
                      activeIndex === index
                        ? "font-bold"
                        : "text-gray-600 hover:text-primary-foreground"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span
                      className={`pb-1.5 ${
                        activeIndex === index
                          ? "border-b-2 border-primary-foreground"
                          : "border-b-2 border-transparent"
                      }`}
                    >
                      {card.nav}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main Content */}
          <article className="flex-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground leading-tight">
              {cards[activeIndex].header}
            </h2>
            <p className="mt-3 italic text-lg text-gray-600">
              {cards[activeIndex].subheader}
            </p>

            <div className="mt-6 space-y-6 text-gray-700 leading-relaxed">
              {cards[activeIndex].paras.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <section className="mt-8">
              <h3 className="font-semibold text-lg">Key Capabilities</h3>
              <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
                {cards[activeIndex].capabilities.map((cap, i) => (
                  <li key={i}>{cap}</li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </div>
    </Border>
  );
};

export default NexNetDashboard;
