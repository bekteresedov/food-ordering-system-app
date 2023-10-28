"use client";
import React from "react";
import Button from "../../UI/button";
import { ICampaign } from "@/app/types/home/ICampaign";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { BsBasketFill } from "react-icons/bs";
import { useTranslations } from "next-intl";

const CampaignItem: React.FC<ICampaign> = ({ discount, src, title }) => {
  const t = useTranslations("Campaign");

  return (
    <>
      <div className=" dark:bg-dbg bg-green text-white flex gap-4 px-3 py-4 rounded w-full hover:scale-105 transition-all">
        <div className="relative rounded-full border md:w-28 md:h-28 w-20 h-20 border-red border-[3px]">
          <div className="rounded-full overflow-hidden">
            <Image
              src={src}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-full hover:scale-95 transition-all"
            />
          </div>
        </div>
        <div className="flex flex-col gap-0 md:gap-1">
          <h2 className="font-dancing font-semibold  text-base md:text-lg ">
            {title}
          </h2>
          <div>
            <span className="font-dancing font-semibold  text-xl md:text-3xl ">
              {discount}%
            </span>
            <span className="font-dancing ml-[2px] text-xs">Off</span>
          </div>
          <div className="hidden md:block">
            <Button className=" btn-red flex items-center gap-1 font-mont">
              {t("Order Now")}
              <FaShoppingCart className="text-xs" />
            </Button>
          </div>

          <BsBasketFill className="block md:hidden text-base hover:text-red transition-all" />
        </div>
      </div>
    </>
  );
};

export default CampaignItem;
