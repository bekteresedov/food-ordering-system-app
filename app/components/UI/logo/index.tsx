import { ILogoProps } from "@/app/types/header/ILogo";
import React from "react";

const Logo: React.FC<ILogoProps> = ({ children }) => {
  return (
    <>
      <h2 className="text-[2rem] font-dancing font-bold">{children}</h2>
    </>
  );
};

export default Logo;
