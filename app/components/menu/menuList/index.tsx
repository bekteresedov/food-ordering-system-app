"use client";
import React, { useState } from "react";
import Title from "../../UI/title";
import { IMenu } from "@/app/types/menu/IMenu";
import MenuItem from "../menuItem";
import Button from "../../UI/button";
import { useTranslations } from "next-intl";
const data: IMenu[] = [
  {
    categoryName: "Hamburger",
    product: [
      {
        title: "Hamburger",
        subTitle:
          "lorem ipsum dolor sit amet, consectetur adip  sapien sed diam. Lorem ipsum dolor sit amet",
        price: 10,
        src: "https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933",
      },
      {
        title: "Hamburger",
        subTitle:
          "lorem ipsum dolor sit amet, consectetur adip  sapien sed diam. Lorem ipsum dolor sit amet",
        price: 10,
        src: "https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933",
      },
      {
        title: "Hamburger",
        subTitle:
          "lorem ipsum dolor sit amet, consectetur adip  sapien sed diam. Lorem ipsum dolor sit amet",
        price: 10,
        src: "https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933",
      },
      {
        title: "Hamburger",
        subTitle:
          "lorem ipsum dolor sit amet, consectetur adip  sapien sed diam. Lorem ipsum dolor sit amet",
        price: 10,
        src: "https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933",
      },
      {
        title: "Hamburger",
        subTitle:
          "lorem ipsum dolor sit amet, consectetur adip  sapien sed diam. Lorem ipsum dolor sit amet",
        price: 10,
        src: "https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933",
      },
      {
        title: "Hamburger",
        subTitle:
          "lorem ipsum dolor sit amet, consectetur adip  sapien sed diam. Lorem ipsum dolor sit amet",
        price: 10,
        src: "https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933",
      },
      {
        title: "Hamburger",
        subTitle:
          "lorem ipsum dolor sit amet, consectetur adip  sapien sed diam. Lorem ipsum dolor sit amet",
        price: 10,
        src: "https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933",
      },
      {
        title: "Hamburger",
        subTitle:
          "lorem ipsum dolor sit amet, consectetur adip  sapien sed diam. Lorem ipsum dolor sit amet",
        price: 10,
        src: "https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933",
      },
      {
        title: "Hamburger",
        subTitle:
          "lorem ipsum dolor sit amet, consectetur adip  sapien sed diam. Lorem ipsum dolor sit amet",
        price: 10,
        src: "https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933",
      },
    ],
  },
  {
    categoryName: "Hamburger",
    product: [
      {
        title: "Hamburger",
        subTitle:
          "lorem ipsum dolor sit amet, consectetur adip  sapien sed diam. Lorem ipsum dolor sit amet",
        price: 10,
        src: "https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933",
      },
      {
        title: "Hamburger",
        subTitle:
          "lorem ipsum dolor sit amet, consectetur adip  sapien sed diam. Lorem ipsum dolor sit amet",
        price: 10,
        src: "https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933",
      },
      {
        title: "Hamburger",
        subTitle:
          "lorem ipsum dolor sit amet, consectetur adip  sapien sed diam. Lorem ipsum dolor sit amet",
        price: 10,
        src: "https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933",
      },
    ],
  },
  {
    categoryName: "Pizza",
    product: [
      {
        title: "Pizza",
        subTitle:
          "lorem ipsum dolor sit amet, consectetur adip  sapien sed diam. Lorem ipsum dolor sit amet",
        price: 10,
        src: "https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933",
      },
      {
        title: "Pizza",
        subTitle:
          "lorem ipsum dolor sit amet, consectetur adip  sapien sed diam. Lorem ipsum dolor sit amet",
        price: 10,
        src: "https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933",
      },
      {
        title: "Pizza",
        subTitle:
          "lorem ipsum dolor sit amet, consectetur adip  sapien sed diam. Lorem ipsum dolor sit amet",
        price: 10,
        src: "https://pizzamizza.az/upload/resize_cache/iblock/05c/254_254_2/05c1187c21bea988b38e31089dfec366.jpg?161761730265933",
      },
    ],
  },
];

const MenuList = () => {
  const [number, setNumber] = useState<number>(0);
  const [limit, setLimit] = useState<number>(3);
  const t = useTranslations("Menu");

  return (
    <>
      <section className={`w-8/12 mx-auto `}>
        <Title className="text-center font-dancing font-black text-3xl cursor-pointer">
          {t("Our Menu")}
        </Title>
        <div>
          <div className="flex flex-col items-center mt-4">
            <ul className="flex items-center gap-4 font-mont font-medium  text-[13px]">
              {data.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setNumber(index);
                    setLimit(3);
                  }}
                  className={
                    number == index
                      ? "dark:bg-dbg bg-green rounded-full cursor-pointer px-3 py-[4px] text-white hover:scale-95 transition-all "
                      : ""
                  }
                >
                  {item.categoryName}
                </li>
              ))}
            </ul>
            <ul className="flex justify-between mt-5 flex-wrap ">
              {data[number].product.slice(0, limit).map((item, index) => (
                <li
                  key={index}
                  className={`w-full sm:w-full md:w-[45%] lg:w-[30%] mb-5`}
                >
                  <MenuItem
                    price={item.price}
                    src={item.src}
                    subTitle={item.subTitle}
                    title={item.title}
                  />
                </li>
              ))}
            </ul>
            <Button
              className="btn-red font-mont mt-2 "
              onClick={() => setLimit(limit + 3)}
              disabled={limit == data[number].product.length}
            >
              {t("View More")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuList;
