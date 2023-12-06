import { ILogoProps } from "@/app/types/ui/ILogo";
import { useRouter } from "next/navigation";
import React from "react";

const Logo: React.FC<ILogoProps> = ({ children }) => {
  const { push } = useRouter();

  return (
    <>
      <h2
        className="text-[2rem] font-dancing font-bold text-white cursor-pointer text-white"
        onClick={() => push("/")}
      >
        {children}
        <span className="text-red text-[3rem] ml-[3px]">.</span>
      </h2>
    </>
  );
};

export default Logo;
