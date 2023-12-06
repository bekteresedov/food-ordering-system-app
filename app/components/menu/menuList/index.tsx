"use client";
import React, { useEffect, useState } from "react";
import Title from "../../UI/title";
import MenuItem from "../menuItem";
import Button from "../../UI/button";
import { useTranslations } from "next-intl";
import { IProduct } from "@/app/types/admin/IAdminProduct";
import { get } from "@/app/service/httpService";
import Loading from "../../share/loading";

const MenuList = () => {
  const [limit, setLimit] = useState<number>(3);
  const t = useTranslations("Menu");
  const [products, setProducts] = useState<IProduct[]>();
  const [category, setCategory] = useState<string[]>();
  const [select, setSelect] = useState<string>("All");
  const [filterProducts, setFilterProducts] = useState<IProduct[]>();
  const [loading, setLoading] = useState(true);
  const handleFilter = (filter: string): void => {
    setSelect(filter);
    if (filter == "All") {
      setFilterProducts(products);
    } else {
      setFilterProducts(
        products?.filter(
          (product: IProduct) => product.Category?.categoryName == filter
        )
      );
    }

    setLimit(3);
  };
  const fetchData = async () => {
    try {
      const { data, statusCode } = await get("/products/all");
      if (statusCode === 200) {
        const unique: string[] = [];
        data.forEach((item: IProduct) => {
          if (!unique.includes(item.Category?.categoryName as string)) {
            unique.push(item.Category?.categoryName as string);
          }
        });
        setCategory(["All", ...unique]);
        const productList: IProduct[] = data.filter(
          (product: IProduct) => product.campaign?.isCampaign != true
        );
        setProducts(productList);
        setFilterProducts(productList);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <Loading></Loading>
      </>
    );
  }
  return (
    <>
      <section className={`w-8/12 mx-auto`}>
        <Title className="text-center  font-black text-3xl ">
          {t("Our Menu")}
        </Title>
        <div>
          <div className="flex flex-col items-center mt-6 mb-2">
            <ul className="flex items-center gap-4 font-mont font-medium  text-[13px]">
              {category?.map((item, index) => (
                <li
                  key={item + index}
                  onClick={() => {
                    handleFilter(item);
                  }}
                  className={
                    item == select
                      ? "dark:bg-dbg bg-green rounded-full cursor-pointer px-3 py-[4px] text-white hover:scale-95 transition-all "
                      : ""
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex w-full justify-center gap-7 mt-7 flex-wrap ">
              {filterProducts
                ?.slice(0, limit)
                .map((item: IProduct, index: number) => (
                  <li
                    key={item.productId}
                    className=" min-h-[350px] w-full sm:w-full md:w-[45%] lg:w-[30%] mb-5"
                  >
                    <MenuItem
                      id={item.productId as string}
                      price={item.price}
                      src={item.img}
                      subTitle={item.description as string}
                      title={item.productName}
                    />
                  </li>
                ))}
            </ul>
            <Button
              className="btn-red font-mont mt-2 "
              onClick={() => setLimit(limit + 3)}
              disabled={limit == filterProducts?.length}
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
