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

import { ModeToggle } from "./mode-toggle";
import Logo from "./Logo";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="flex justify-between border-2 border-red-500">
        <Logo />
        <NavigationMenu viewport={false}>
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
                <Link href="/solutions">Solutions</Link>
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
            <NavigationMenuItem>
              <Button variant={"outline"} children={"Contact"} />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant={"default"} children={"Request a Demo"} />
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
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
