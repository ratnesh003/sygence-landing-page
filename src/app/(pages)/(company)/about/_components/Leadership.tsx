import React from "react";

import Border from "@/components/Border";

import { leadership } from "../_constants";
import Image from "next/image";
import Link from "next/link";

const Leadership = () => {
  return (
    <React.Fragment>
      <Border>
        <h1 className="mb-20 w-full text-center text-5xl tracking-tight font-medium" id="founders">
          {leadership.title}
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-20 gap-y-40">
          <div className="w-full h-full">
            <Image
              src={leadership.ceo.proPic}
              alt="ceo-profile-pic"
              height={100}
              width={100}
              className="object-contain w-full"
            />
          </div>
          <div>
            <h1 className="text-4xl tracking-tight font-medium mb-5">
              {leadership.ceo.name}
            </h1>
            {leadership.ceo.description.map((content, idx) => (
              <p key={idx + 1} className="mb-5 tracking-tighter">
                {content}
              </p>
            ))}
            <div className="flex items-center justify-start gap-5 h-6">
              {leadership.ceo.socials.map((content, idx) => (
                <Link
                  href={idx == 1 ? `mailto:${content.link}` : content.link}
                  key={idx + 1}
                  className="w-fit h-full"
                >
                  <Image
                    src={content.icon}
                    alt={content.link}
                    width={100}
                    height={100}
                    className="object-contain h-full w-auto"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-4xl tracking-tight font-medium mb-5">
              {leadership.coo.name}
            </h1>
            {leadership.coo.description.map((content, idx) => (
              <p key={idx + 1} className="mb-5 tracking-tighter">
                {content}
              </p>
            ))}
            <div className="flex items-center justify-start gap-5 h-6">
              {leadership.coo.socials.map((content, idx) => (
                <Link
                  href={idx == 1 ? `mailto:${content.link}` : content.link}
                  key={idx + 1}
                  className="w-fit h-full"
                  target="_blank"
                >
                  <Image
                    src={content.icon}
                    alt={content.link}
                    width={100}
                    height={100}
                    className="object-contain h-full w-auto"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full h-full">
            <Image
              src={leadership.coo.proPic}
              alt="coo-profile-pic"
              height={100}
              width={100}
              className="object-contain w-full"
            />
          </div>
        </div>
      </Border>
    </React.Fragment>
  );
};

export default Leadership;
