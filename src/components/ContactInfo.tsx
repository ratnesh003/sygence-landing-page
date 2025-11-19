import React from "react";

import Link from "next/link";
import { LinkedinIcon, Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-4">
      <Link
        href={"https://www.linkedin.com/company/sygenceinc/"}
        target="_blank"
      >
        <p className="flex items-center justify-center gap-3 tracking-tight w-fit hover:cursor-pointer hover:text-accent-foreground">
          <LinkedinIcon size={18} /> sygenceinc
        </p>
      </Link>
      <Link href={"mailto:support@sygence.one"} target="_blank">
        <p className="flex items-center justify-center gap-3 tracking-tight w-fit hover:cursor-pointer hover:text-accent-foreground">
          <Mail size={18} /> support@sygence.one
        </p>
      </Link>
      <Link href={"tel:+18001234567"} target="_blank">
        <p className="flex items-start justify-center gap-3 tracking-tight w-fit hover:cursor-pointer hover:text-accent-foreground">
          <Phone size={18} /> +1 (800) 123-4567
        </p>
      </Link>
      <Link
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURI(
          "A4 / UG2 Models Legacy, Taleigao, Panjim, Goa, India 403002"
        )}`}
        target="_blank"
      >
        <p className="flex items-start justify-center gap-3 tracking-tight w-fit hover:cursor-pointer hover:text-accent-foreground">
          <MapPin size={18} /> A4 / UG2 Models Legacy, Taleigao, <br />
          Panjim, Goa, India 403002
        </p>
      </Link>
    </div>
  );
};

export default ContactInfo;
