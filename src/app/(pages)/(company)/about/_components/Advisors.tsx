import React from "react";

import Border from "@/components/Border";
import { advisors } from "../_constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Advisors = () => {
  return (
    <Border>
      <div className="flex flex-col items-center justify-center" id="advisors">
        <h1 className="text-5xl font-medium tracking-tight mb-6 w-full text-center">{advisors.title}</h1>
        <p className="w-full lg:w-3xl text-center tracking-wide mb-20">{advisors.description}</p>
        {advisors.cards.map((content, idx) => (
          <div
            className={cn(
              "flex flex-col item-center justify-center w-full mb-8",
              idx % 2 ? "md:flex-row-reverse" : "md:flex-row"
            )}
            key={idx + 1}
          >
            <div className="w-full xl:w-1/4">
              <Image
                src={content.proPic}
                height={100}
                width={100}
                alt={content.name + "profile pic"}
                className="w-full md:w-64 object-contain h-auto rounded-3xl"
              />
            </div>
            <div className={cn("w-full xl:w-3/4",idx % 2 ? "pr-6" : "pl-6")}>
              <h1 className="font-medium text-4xl tracking-tighter my-4">{content.name}</h1>
              {content.description.map((para, idx) => (
                <p key={idx + 1} className="text-[16px] font-normal tracking-tighter mb-6">{para}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Border>
  );
};

export default Advisors;
