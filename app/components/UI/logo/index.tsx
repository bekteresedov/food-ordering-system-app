import { ILogoProps } from "@/app/types/header/ILogo";
import React from "react";

const Logo: React.FC<ILogoProps> = ({ children }) => {
  return (
    <>
      <h2 className="text-[2rem] font-dancing font-bold text-white cursor-pointer">
        {children}
        <span className="text-red text-[3rem] ml-[3px]">.</span>
      </h2>
    </>
  );
};

export default Logo;
