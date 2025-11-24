"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

export default function MobileNavbar() {
  const [openCompanySub, setOpenCompanySub] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 text-accent-foreground">
            <Menu size={28} />
          </button>
        </SheetTrigger>

        <SheetContent side="left" className="w-[300px] px-4 py-6">
          <SheetHeader>
            <SheetTitle className="text-xl font-semibold mb-6">
              <Logo />
            </SheetTitle>
          </SheetHeader>

          {/* Navigation list */}
          <nav className="flex flex-col gap-6 text-lg">
            <SheetClose asChild>
              <Link href="/" className="hover:text-accent-foreground/80">
                Home
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/solutions" className="hover:text-accent-foreground/80">
                Solutions
              </Link>
            </SheetClose>

            {/* Company Dropdown */}
            <div className="flex flex-col">
              <button
                className="flex justify-between items-center w-full text-left text-lg font-normal"
                onClick={() => setOpenCompanySub(!openCompanySub)}
              >
                Company
                <span>{openCompanySub ? "−" : "+"}</span>
              </button>

              {openCompanySub && (
                <div className="mt-3 ml-3 flex flex-col gap-4 text-base">
                  <SheetClose asChild>
                    <Link href="/about">About Us</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/careers">Careers</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/contact">Contact Us</Link>
                  </SheetClose>
                </div>
              )}
            </div>

            {/* Contact Button */}
            <SheetClose asChild>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Contact
                </Button>
              </Link>
            </SheetClose>

            {/* Request Demo Button */}
            <SheetClose asChild>
              <Link href="/contact">
                <Button
                  variant="default"
                  className="w-full bg-accent-foreground text-primary hover:bg-accent-foreground/90"
                >
                  Request a Demo
                </Button>
              </Link>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
