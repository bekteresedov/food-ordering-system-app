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
  errorMessage,
  isShowError,
}) => {
  return (
    <>
      <div>
        <input
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          type={type}
          className={`outline-none border text-dark rounded w-full text-sm ${className} ${
            isShowError && errorMessage && "border-red"
          }`}
        />
        {errorMessage && isShowError && (
          <p className="text-red text-xs font-mont">{errorMessage}</p>
        )}
      </div>
    </>
  );
};

export default Input;
