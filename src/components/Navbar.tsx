"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Logo from "./Logo";
import { Button } from "./ui/button";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="sticky top-0 z-10 bg-primary flex justify-between items-center px-5 lg:px-16 py-[14px]">
        <Logo />
        <NavigationMenu viewport={false} className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/solutions">Sygence NexNet</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[100px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/about">About Us</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/careers">Careers</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/contact">Contact Us</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="mr-3">
              <Link href={"/contact"}>
                <Button variant={"outline"}>Contact</Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/contact"}>
                <Button
                  variant={"default"}
                  className="bg-accent-foreground text-primary hover:bg-accent-foreground/90"
                >
                  Request a demo
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <MobileNavbar />
      </nav>
    </React.Fragment>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
