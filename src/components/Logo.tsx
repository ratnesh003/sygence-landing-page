import Image from "next/image";
import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image 
        src={"/assets/components/LogoText.svg"} 
        alt="Sygencey Logo" 
        height={30}
        width={180}
      />
    </Link>
  );
};

export default Logo;
