import { IProduct } from "@/app/types/menu/IMenu";
import Image from "next/image";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const MenuItem: React.FC<IProduct> = ({ price, src, subTitle, title }) => {
  return (
    <>
      <div
        className={`flex flex-col items-center dark:bg-dbg bg-green rounded-md hover:scale-[0.98] transition-all
         `}
      >
        <div className="bg-pbg w-full flex justify-center rounded-pro py-6">
          <Image
            src={src}
            alt={title}
            width={110}
            height={110}
            className="rounded-full hover:scale-105 transition-all"
          />
        </div>
        <div className="text-white p-4 font-mont">
          <h2 className="text-base font-medium">{title}</h2>
          <p className="text-xs font-light ">{subTitle}</p>
          <div className="mt-3 flex justify-between mb-2">
            <span className="text-base font-normal">${price}</span>
            <span className="bg-red w-7 h-7 flex items-center justify-center rounded-full ">
              <FaShoppingCart className="text-[13px] cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
