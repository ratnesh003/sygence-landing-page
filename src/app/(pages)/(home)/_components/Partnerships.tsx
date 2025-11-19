import React from "react";

import { partnerships } from "../_constants";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const Partnerships = () => {
  return (
    <div className="relative px-0 py-16 md:px-0 md:py-24 xl:px-0 xl:py-28">
      <h1 className="text-5xl font-medium tracking-tighter text-center mb-6">{partnerships.title}</h1>
      <p className="text-center mb-20">{partnerships.description}</p>
      <Marquee>
        {partnerships.cards.map((content, idx) => (
          <div className="flex flex-row items-center justify-center gap-2.5 px-8 py-0" key={idx + 1}>
            <div>
              <Image 
                src={content.icon}
                height={60}
                width={60}
                alt={content.header}
                className="w-full object-contain"
              />
            </div>
            <h1 className="text-3xl">{content.header}</h1>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Partnerships;
