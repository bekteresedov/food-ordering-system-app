"use client";
import React from "react";
import Button from "../../UI/button";
import { ICampaign } from "@/app/types/home/ICampaign";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { BsBasketFill } from "react-icons/bs";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addProduct } from "@/app/redux/features/cartSlice";
import { IProduct } from "@/app/types/menu/IMenu";

const CampaignItem: React.FC<IProduct> = (props) => {
  const t = useTranslations("Campaign");
  const { push } = useRouter();
  const dispatch = useDispatch();
  const handleClick = (): void => {
    dispatch(
      addProduct({
        ...props,
        price:
          Number(props.price) -
          (Number(props.price) * (props?.campaign?.campaignRate as number)) /
            100,
      })
    );
  };
  return (
    <>
      <div className=" dark:bg-dbg bg-green text-white flex gap-4 px-3 py-4 rounded w-full hover:scale-105 transition-all">
        <div className="relative rounded-full border md:w-28 md:h-28 w-20 h-20 border-red border-[3px]">
          <div className="rounded-full overflow-hidden">
            <Image
              src={props.src || ""}
              alt={props.title || ""}
              layout="fill"
              objectFit="cover"
              className="rounded-full hover:scale-95 transition-all"
              onClick={() => push("/product/" + props.id)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-0 md:gap-1">
          <h2 className="font-dancing font-semibold  text-base md:text-lg ">
            {props.title}
          </h2>
          <div>
            <span className="font-dancing font-semibold  text-xl md:text-3xl ">
              {props.campaign?.campaignRate}%
            </span>
            <span className="font-dancing ml-[2px] text-xs">Off</span>
          </div>
          <div className="hidden md:block">
            <Button
              className=" btn-red flex items-center gap-1 font-mont"
              onClick={() => handleClick()}
            >
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
