"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Title from "../../UI/title";
import Button from "../../UI/button";
import { IProduct } from "@/app/types/admin/IAdminProduct";
import { useParams } from "next/navigation";
import { getHeader } from "@/app/service/httpService";
import { useDispatch } from "react-redux";
import { optinalIncrementProduct } from "@/app/redux/features/cartSlice";
import { useTranslations } from "next-intl";
const ProductDetails = () => {
  const [product, setProduct] = useState<IProduct>();
  const [count, setCount] = useState<number>(0);
  const dispatch = useDispatch();
  const { id } = useParams();
  const t = useTranslations("productDetails");

  useEffect(() => {
    const getProduct = async (): Promise<void> => {
      const { data, statusCode } = await getHeader("/products/get/" + id);
      if (statusCode === 200) {
        setProduct(data);
      }
    };

    getProduct();
  }, []);

  const handleClick = (): void => {
    if (count == 0) return;
    dispatch(
      optinalIncrementProduct({
        data: {
          ...product,
          price:
            Number(product?.price) -
              (Number(product?.price) *
                (product?.campaign?.campaignRate as number)) /
                100 || product?.price,
          src: product?.img,
          title: product?.productName,
          id: product?.productId,
        },

        count: count,
      })
    );
  };
  return (
    <>
      <section>
        <div className=" flex  justify-center flex-col md:flex-row items-center h-[140vh] md:h-screen gap-[50px] md:gap-[100px] w-full ">
          <div className="relative h-[250px] md:h-[400px] w-[250px] md:w-[400px]">
            <Image
              src={product?.img || ""}
              alt={product?.productName || "Anonim"}
              layout="fill"
              objectFit="cover"
              className="dark:border border-red dark:border-[3px] rounded-full hover:scale-105 transition-all "
            />
            {product?.campaign?.isCampaign && (
              <div className="absolute top-0 right-4 text-white bg-red rounded-full px-2 py-1">
                <span className="font-dancing font-semibold  text-xl md:text-3xl ">
                  {product?.campaign?.campaignRate}%
                </span>
                <span className="font-dancing ml-[2px] text-xs">Off</span>
              </div>
            )}
          </div>
          <div>
            <Title className="text-4xl font-bold mb-2">
              {product?.productName}
            </Title>
            <span
              className={`${
                product?.campaign?.isCampaign && "line-through"
              } text-red  border-red font-bold relative`}
            >
              ${product?.price}
            </span>

            {product?.campaign?.isCampaign && (
              <span className="ml-4 text-[green]  font-bold">
                $
                {Math.floor(
                  Number(product?.price) -
                    (Number(product?.price) *
                      (product?.campaign?.campaignRate as number)) /
                      100
                )}
              </span>
            )}

            <p className="font-mont mb-4 mt-6 text-[13px] font-medium">
              {product?.description}
            </p>
            <div>
              <Button
                className="dark:bg-red bg-green px-2 font-bold text-white rounded-2xl "
                onClick={() => setCount(count > 1 ? count - 1 : 0)}
              >
                -
              </Button>
              <span className="font-mont font-semibold mx-2 text-xl">
                {count}
              </span>
              <Button
                className="dark:bg-red bg-green px-2 font-bold text-white rounded-2xl"
                onClick={() => setCount(count + 1)}
              >
                +
              </Button>
            </div>
            <Button className="btn-red mt-6" onClick={() => handleClick()}>
              {t("Add to Cart")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
