"use client";
import React from "react";
import Image from "next/image";
import paid from "./assets/images/paid.png";
import bake from "./assets/images/bake.png";
import bike from "./assets/images/bike.png";
import delivered from "./assets/images/delivered.png";
import { useTranslations } from "next-intl";

const Order = () => {
  const t = useTranslations("Order");
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row gap-20 md:gap-0 justify-between text-white min-h-[300px]">
          <div className="w-full py-20">
            <div className="w-11/12 mx-auto  overflow-x-auto ">
              <div>
                <table className="bg-[#162A2D] w-full font-mont min-w-[800px]">
                  <thead className="uppercase text-xs">
                    <tr>
                      <th className="p-3">{t("Order id")}</th>
                      <th>{t("Customer")}</th>
                      <th>{t("Address")}</th>
                    </tr>
                  </thead>
                  <tbody className="text-center bg-green dark:bg-dbg  text-[14px] hover:bg-red dark:hover:bg-red transition-all">
                    <tr>
                      <td className="flex items-center gap-1 justify-center p-4">
                        324242343
                      </td>
                      <td>Baktar Asad</td>
                      <td>Kurdamir</td>
                      <td>$ 34</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-[#F05941]  mt-10 flex justify-between items-center p-7 min-w-[800px]">
                <div className="relative flex flex-col items-center font-mont text-[14px] font-medium gap-1">
                  <Image
                    src={paid}
                    alt=""
                    width={40}
                    height={40}
                    objectFit="contain"
                  />
                  <span>{t("Payment")}</span>
                </div>
                <div className="relative flex flex-col animate-pulse items-center font-mont text-[14px] font-medium gap-1">
                  <Image
                    src={bake}
                    alt=""
                    width={40}
                    height={40}
                    objectFit="contain"
                  />
                  <span>{t("Preparing")}</span>
                </div>
                <div className="relative flex flex-col items-center font-mont text-[14px] font-medium gap-1">
                  <Image
                    src={bike}
                    alt=""
                    width={40}
                    height={40}
                    objectFit="contain"
                  />
                  <span>{t("On the way")}</span>
                </div>
                <div className="relative flex flex-col items-center font-mont text-[14px] font-medium gap-1">
                  <Image
                    src={delivered}
                    alt=""
                    width={40}
                    height={40}
                    objectFit="contain"
                  />
                  <span>{t("Delivered")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
