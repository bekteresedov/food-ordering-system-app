import { ISearch } from "@/app/types/header/ISearch";
import Image from "next/image";
import React from "react";

const SearchItem: React.FC<ISearch> = ({ price, src, title }) => {
  return (
    <>
      <div className="flex items-center justify-between p-1 rounded border-b border-red hover:bg-red transition-all hover:text-white font-mont font-bold text-[13px]">
        <Image src={src || ""} alt={title} width={44} height={44} />
        <h2 className="cursor-pointer">{title}</h2>
        <span>${price}</span>
      </div>
    </>
  );
};

export default SearchItem;
