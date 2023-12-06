"use client";
import React, { useEffect, useState } from "react";
import Title from "../UI/title";
import Button from "../UI/button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { ICartState } from "@/app/types/redux/ICart";
import { useDispatch } from "react-redux";
import {
  decrementProduct,
  deleteProduct,
  incrementProduct,
  reset,
} from "@/app/redux/features/cartSlice";
import { getHeader, postHeader } from "@/app/service/httpService";
import cookie from "js-cookie";
import { IResponse } from "@/app/types/share/IResponse";

import { ToastContainer, toast } from "react-toastify";
const Cart = () => {
  const data: ICartState = useSelector((state: RootState) => state.cart);
  const [user, setUser] = useState<{ email: string; address: string }>();
  const t = useTranslations("Cart");
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const { data, statusCode } = await getHeader(
        `/users/get/${cookie.get("id")}`
      );
      if (statusCode === 200) {
        setUser(data);
      }
    };

    fetchData();
  }, []);

  const handleCart = async (): Promise<void> => {
    const response: IResponse = await postHeader(
      {
        body: {
          customer: user?.email || "",
          address: user?.address || "",
          total: Math.round(data.total),
          status: 0,
          method: 0,
        },
      },
      "/orders/save"
    );

    if (response.statusCode === 200) {
      notify();
      dispatch(reset());
    }
  };

  const handleClick = (id: string): void => {
    dispatch(deleteProduct({ id: id }));
  };

  const notify = () =>
    toast.success(t("successfully"), {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row gap-20 md:gap-0 justify-between text-white">
          <div className="w-screen md:w-9/12">
            <div className="w-11/12 mx-auto mt-10 overflow-x-auto">
              <table className="bg-[#162A2D] w-full font-mont min-w-[800px]">
                <thead className="uppercase text-xs">
                  <tr>
                    <th className="p-3">{t("Product")}</th>
                    <th>{t("Price")}</th>
                    <th>{t("Quantity")}</th>
                    <th>{t("action")}</th>
                  </tr>
                </thead>
                <tbody className=" text-center bg-green dark:bg-dbg  text-[14px] ">
                  {data.products.map((product) => (
                    <tr
                      key={product.data.id}
                      className="hover:bg-[green] dark:hover:bg-red transition-all"
                    >
                      <td className="p-4 ">
                        <div className="w-[250px]  gap-1 flex items-center mx-auto">
                          <div className="relative h-10 w-10">
                            <Image
                              src={product.data.src || ""}
                              alt={product.data.title || ""}
                              layout="fill"
                              objectFit="cover"
                              className="rounded-full hover:scale-105 transition-all"
                            />
                          </div>
                          <span className="ml-2">{product.data.title}</span>
                        </div>
                      </td>
                      <td>
                        <span>{Math.round(product.inPrice)}$</span>
                      </td>
                      <td>
                        <div className="flex items-center justify-center">
                          <Button
                            onClick={() => {
                              dispatch(
                                decrementProduct({
                                  id: product.data.id as string,
                                })
                              );
                            }}
                            className="bg-red px-2 font-semibold text-white rounded-2xl "
                          >
                            -
                          </Button>
                          <span className="mx-2 ">{product.inCount}</span>
                          <Button
                            onClick={() => {
                              dispatch(
                                incrementProduct({
                                  id: product.data.id as string,
                                })
                              );
                            }}
                            className=" bg-red px-2 font-medium text-white rounded-2xl"
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td>
                        <Button
                          className="btn-red"
                          onClick={() => handleClick(product.data.id as string)}
                        >
                          {t("Delete")}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded mx-auto mt-10 mb-16 w-8/12 md:w-3/12 bg-green dark:bg-dbg pt-[50px] md:pt-[100px] pb-[80px] md:pb-[140px] flex flex-col items-center text-start">
            <ul className="font-mont text-[15px] font-semibold ">
              <li>
                <Title className="uppercase text-2xl ">{t("Cart Total")}</Title>
              </li>
              <li className="mt-5">
                {t("Porduct Total")}:
                <span className="font-normal ml-1">{data.quantity}</span>
              </li>
              <li className="mt-2">
                {t("Total")}:
                <span className="font-normal ml-1">
                  ${Math.round(data.total)}
                </span>
              </li>

              <li>
                <Button
                  className="uppercase btn-red mt-4 "
                  onClick={() => handleCart()}
                >
                  {t("Checkout now")}
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </section>
    </>
  );
};

export default Cart;
