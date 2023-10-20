import { IButtonProps } from "@/app/types/ui/IButton";
import React from "react";

const Button: React.FC<IButtonProps> = ({ children, onClick, className }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
