"use client";
import { addProduct } from "@/app/redux/features/cartSlice";
import { IProduct } from "@/app/types/menu/IMenu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";

const MenuItem: React.FC<IProduct> = (props) => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const handleClick = (): void => {
    dispatch(addProduct({ ...props }));
  };

  return (
    <>
      <div
        className={`w-full h-full flex flex-col  dark:bg-dbg bg-green rounded-md hover:scale-[0.98] transition-all
         `}
      >
        <div className="bg-pbg w-full h-[50%] flex justify-center rounded-pro py-6">
          <div
            className="relative h-[110px] w-[110px]"
            onClick={() => push("/product/" + props.id)}
          >
            <Image
              src={props.src || ""}
              alt={props.title || ""}
              layout="fill"
              objectFit="cover"
              className="rounded-full hover:scale-105 transition-all"
            />
          </div>
        </div>
        <div className="text-white p-4 font-mont flex flex-col justify-between h-full">
          <div>
            <h2 className="text-[17px] font-medium">{props.title}</h2>
            <p className="text-[14px] font-light w-10/12 break-words mt-1">
              {props.subTitle}
            </p>
          </div>

          <div className="mt-3 flex justify-between ">
            <span className="text-[17px] font-normal ">${props.price}</span>
            <span className="bg-red w-8 h-8 flex items-center justify-center rounded-full ">
              <FaShoppingCart
                className="text-[15px] cursor-pointer"
                onClick={() => handleClick()}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
