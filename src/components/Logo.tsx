import Image from "next/image";
import React from "react";
import * as logo from "@/assets/LogoText.svg";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image 
        src={logo} 
        alt="Sygencey Logo" 
        height={30}
        // width={100}
      />
    </Link>
  );
};

export default Logo;
