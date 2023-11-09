import { IInput } from "@/app/types/ui/IInput";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("Errors");

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
            isShowError && errorMessage && "border-red"
          }`}
        />
        {errorMessage && isShowError && (
          <p className="text-red text-xs font-mont mt-[2px]">
            {t(errorMessage)}
          </p>
        )}
      </div>
    </>
  );
};

export default Input;
