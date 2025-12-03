"use client";
import * as React from "react"

// Order of the components followed as per figma design
import { 
  Hero, 
  LegacyGap, 
  NexNetOverview, 
  NexNetOverviewMobile,
  Advantages, 
  Industries, 
  Vision, 
  Impact,
  Partnerships,
  Resources
} from "./_components"

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <LegacyGap />
      <NexNetOverview />
      <NexNetOverviewMobile />
      <Advantages />
      <Industries />
      <Vision />
      <Impact />
      <Partnerships />
      <Resources />
    </React.Fragment>
  );
}
