import React from "react";

import Border from "@/components/Border";
import { resources } from "../_constants";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Resources = () => {
  return (
    <Border>
      <h1
        className="text-5xl tracking-tight font-medium mb-6 w-full text-center"
        id="resources"
      >
        {resources.title}
      </h1>
      <p className="w-full text-center tracking-tighter mb-20">
        {resources.description}
      </p>
      {/* <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'> */}
      <Carousel className="w-full px-2">
        <CarouselContent>
          {resources.cards.map((content, idx) => (
            <CarouselItem key={idx + 1} className="md:basis-1/2 lg:basis-1/4">
              <div className="w-full p-2">
                <Image
                  src={content.image}
                  height={100}
                  width={100}
                  alt={`${content.header} Image`}
                  className="object-contain w-full mb-6 rounded-2xl"
                />
                <h1 className="text-2xl tracking-tighter font-medium line-clamp-2 mb-2">
                  {content.header}
                </h1>
                <p className="tracking-tighter line-clamp-1 mb-4">
                  {content.content}
                </p>
                <Link
                  href={content.link}
                  target="_blank"
                  className="text-accent-foreground tracking-tighter font-medium flex flex-row gap-2"
                >
                  <span>Explore</span> <span>&gt;</span>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-10 right-10 w-0 h-0 bg-red-500">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      {/* </div> */}
    </Border>
  );
};

export default Resources;
