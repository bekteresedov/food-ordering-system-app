import { ICustomer } from "@/app/types/customer/ICustomer";
import Image from "next/image";
import React from "react";
import { GoTriangleUp } from "react-icons/go";

const CustomerItem: React.FC<ICustomer> = ({
  description,
  src,
  subTitle,
  title,
}) => {
  return (
    <>
      <div>
        <div className="bg-green dark:bg-dbg text-white rounded p-4  text-start font-mont hover:scale-105 transition-all">
          <div>
            <p className=" text-[14px]">{description}</p>
            <h2 className="mt-2 font-semibold text-[16px]">{title}</h2>
            <h4 className="text-[14px]">{subTitle}</h4>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center hover:scale-95 transition-all">
            <GoTriangleUp className="text-[40px] text-red mb-[-17px]" />
            <Image
              src={src}
              alt={title}
              width={85}
              height={85}
              className="rounded-full left-0 border border-red border-[3px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerItem;
