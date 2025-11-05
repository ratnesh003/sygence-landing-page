"use client";

import { useRef, useState, useEffect } from "react";
import { nexNetOverview } from "../_constants";

const Border = ({ children }: { children: React.ReactElement }) => {
  return (
    <section className="relative px-5 py-16 md:px-18 md:py-24 xl:px-20 xl:py-28">
      <div className="mx-auto w-full">{children}</div>
    </section>
  );
};

export default function NexNetOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;

          const container = containerRef.current;
          const rect = container.getBoundingClientRect();
          const containerHeight = container.offsetHeight;
          const viewportHeight = window.innerHeight;

          // Start when container enters viewport, end when it leaves
          const scrollStart = -rect.top;
          const scrollEnd = containerHeight - viewportHeight;
          const scrollRange = scrollEnd - scrollStart;

          if (scrollStart < 0) {
            // Before container reaches viewport
            setScrollProgress(0);
            setActiveIndex(0);
          } else if (scrollStart > scrollEnd) {
            // After container leaves viewport
            setScrollProgress(1);
            setActiveIndex(nexNetOverview.cards.length - 1);
          } else {
            // Container is in viewport
            const progress = scrollStart / scrollRange;
            setScrollProgress(progress);

            const index = Math.min(
              Math.floor(progress * nexNetOverview.cards.length),
              nexNetOverview.cards.length - 1
            );
            setActiveIndex(index);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ minHeight: "300vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <Border>
          <div
            ref={contentRef}
            className="relative w-full flex flex-col lg:flex-row items-center justify-between bg-white gap-12"
          >
            {/* Left Circle with Tablets */}
            <div className="relative w-[500px] h-[500px] flex items-center justify-center flex-shrink-0">
              {/* Dashed circles */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-dashed border-blue-200"
                  style={{
                    width: `${150 + i * 80}px`,
                    height: `${150 + i * 80}px`,
                  }}
                />
              ))}

              {/* Center logo placeholder */}
              <div className="text-blue-600 text-6xl font-bold select-none z-10">
                S
              </div>

              {/* Tablets */}
              {nexNetOverview.cards.map((tab, idx) => (
                <div
                  className={`absolute ${tab.pos} transition-all duration-500 ${
                    activeIndex === idx
                      ? "bg-blue-600 text-white scale-110 shadow-lg"
                      : "bg-white text-gray-800 scale-100"
                  } border rounded-full px-4 py-2 shadow-md text-xs whitespace-nowrap font-medium`}
                  key={idx + 1}
                >
                  {tab.header}
                </div>
              ))}
            </div>

            {/* Right Side Content */}
            <div className="text-center lg:text-left w-lg">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 transition-all duration-500">
                {nexNetOverview.cards[activeIndex].header}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 transition-all duration-500">
                {nexNetOverview.cards[activeIndex].content}
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 font-medium">
                Explore NexNet →
              </button>
            </div>
          </div>
        </Border>
      </div>
    </div>
  );
}
