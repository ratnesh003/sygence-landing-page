"use client";
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
    <section className="min-h-screen bg-white text-gray-800 px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            {title}
          </h1>
          <p className="mt-4 text-gray-600 text-lg">{description}</p>
        </header>

        <div className="flex gap-12">
          {/* Sidebar Navigation */}
          <nav className="w-72 flex-shrink-0 border-r border-gray-200 pr-4">
            <ul className="space-y-4">
              {cards.map((card, index) => (
                <li key={index}>
                  <button
                    className={`flex items-center gap-2 text-left w-full text-sm font-medium transition-colors duration-200 ${
                      activeIndex === index
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-500"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span>{card.nav}</span>
                  </button>
                  {activeIndex === index && (
                    <div className="ml-2 mt-2 h-0.5 w-2/3 bg-blue-600 rounded" />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Main Content */}
          <article className="flex-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-500 leading-tight">
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
    </section>
  );
};

export default NexNetDashboard;
