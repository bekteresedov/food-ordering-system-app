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
          className={`outline-none border dark:text-white text-dark rounded w-full text-sm ${className} ${
            isShowError &&
            errorMessage &&
            errorMessage != "Reservation" &&
            "border-red"
          }`}
        />
        {errorMessage && isShowError && errorMessage != "Reservation" && (
          <p className="text-red text-xs font-mont mt-[2px]">{errorMessage}</p>
        )}
      </div>
    </>
  );
};

export default Input;
