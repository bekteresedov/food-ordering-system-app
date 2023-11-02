import { IInput } from "@/app/types/ui/IInput";
import React from "react";

const Input: React.FC<IInput> = ({
  type,
  id,
  className,
  placeholder,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <>
      <input
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
        className={`outline-none border text-dark rounded text-sm ${className}`}
      />
    </>
  );
};

export default Input;
