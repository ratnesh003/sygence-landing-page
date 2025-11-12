import React from "react";

import Image from "next/image";

import Border from "@/components/Border";

import { culture } from "../_constants";

const Culture = () => {
  return (
    <Border>
      <div className="flex items-center justify-center gap-x-20">
        <div className="w-1/2 ">
          <Image
            src={culture.bannerImage}
            height={100}
            width={100}
            alt={culture.title}
            className="w-full object-contain"
          />
        </div>
        <div className="">
          <h1 className="text-5xl tracking-tighter font-medium mb-6">{culture.title}</h1>
          <p className="">{culture.description}</p>
          <ul className="list-disc p-6">
            {culture.list.map((content, idx) => (
              <li key={idx + 1}>
                <span className="font-bold">{content.header}</span> : {content.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Border>
  );
};

export default Culture;
