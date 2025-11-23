import React from "react";
import { Separator } from "@/components/ui/separator";
import Border from "./Border";
import ContactInfo from "./ContactInfo";
import { Copyright } from "lucide-react";
import Link from "next/link";
import CookiesDialog from "./Cookies";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Border>
      <div className="flex flex-col gap-12 lg:flex-row item-center justify-between w-full mb-20">
        <div>
          <Logo />
          <p className="mb-8 mt-1 text-sm tracking-tight">Breaking Silos. Shaping Tomorrow.</p>
          <ContactInfo />
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="flex flex-col items-start justify-center gap-4 w-48">
            <Link href={"/about"}>
              <p className="text-sm font-semibold">About us</p>
            </Link>
            <Link href={"/about#founders"}>
              <p className="text-sm font-semibold">Founders</p>
            </Link>
            <Link href={"/about#advisors"}>
              <p className="text-sm font-semibold">Advisors</p>
            </Link>
            <Link href={"/careers"}>
              <p className="text-sm font-semibold">Careers</p>
            </Link>
            <Link href={"/contact"}>
              <p className="text-sm font-semibold">Contact</p>
            </Link>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 w-48">
            <Link href={"/solutions#nexnet"}>
              <p className="text-sm font-semibold">NexNet</p>
            </Link>
            <Link href={"/#industries"}>
              <p className="text-sm font-semibold">Industries</p>
            </Link>
            <Link href={"/#resources"}>
              <p className="text-sm font-semibold">Resources</p>
            </Link>
          </div>
        </div>
      </div>
      <Separator className="mb-8" />
      <div className="h-fit w-full flex flex-col lg:flex-row items-center justify-between">
        <p className="text-sm flex items-center justify-center gap-1">
          <Copyright size={12} />
          2025 Sygence. All rights reserved.
        </p>
        <nav className="flex items-center justify-center gap-6">
          <Link href={"/privacy-policy"}>
            <p className="text-sm underline hover:text-accent-foreground ">
              Privacy Policy
            </p>
          </Link>
          <Link href={"/terms-and-conditions"}>
            <p className="text-sm underline hover:text-accent-foreground ">
              Terms & Conditions
            </p>
          </Link>
          <CookiesDialog />
        </nav>
      </div>
    </Border>
  );
};

export default Footer;
