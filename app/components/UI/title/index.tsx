import { ITitleProps } from "@/app/types/ui/ITitle";
import React from "react";

const Title: React.FC<ITitleProps> = ({ children, className }) => {
  return (
    <>
      <h2 className={`font-dancing cursor-pointer ${className}`}>{children}</h2>
    </>
  );
};

export default Title;
