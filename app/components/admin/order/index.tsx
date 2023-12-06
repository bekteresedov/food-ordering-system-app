import React, { useEffect, useState } from "react";
import Title from "../../UI/title";
import Button from "../../UI/button";
import { useTranslations } from "next-intl";
import { getHeader, patchHeader } from "@/app/service/httpService";
import { IOrder } from "@/app/types/order/IOrder";

const AdminOrder = () => {
  const t = useTranslations("AdminOrder");
  const [order, setOrder] = useState<IOrder[]>([]);
  const status = ["preparing", "on the way", "delivered"];
  const fetchData = async () => {
    const { data, statusCode } = await getHeader(`/orders/all`);
    if (statusCode === 200) {
      setOrder(data.filter((order: IOrder) => (order.status as number) < 3));
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleStatus = async (id: number): Promise<void> => {
    const findOrder = order.findIndex((order) => order.id == id);
    console.log(id);
    if (findOrder != -1) {
      const { data, statusCode } = await patchHeader("/orders/update/" + id, {
        body: {
          ...order[findOrder],
          status: ((order[findOrder].status as number) += 1),
        },
      });

      if (statusCode === 200) {
        // const sp: IOrder[] = order.splice(findOrder, 1, data);
        // setOrder(sp);
        fetchData();
      }
    }
  };
  return (
    <>
      <section>
        <div className="mb-20">
          <Title className="text-2xl md:text-3xl font-semibold mt-0 md:mt-6 mb-4">
            {t("Orders")}
          </Title>
          <div className="overflow-x-auto ">
            <div>
              <table className="bg-[#162A2D] w-full font-mont min-w-[800px] text-white">
                <thead className="uppercase text-xs">
                  <tr>
                    <th>{t("Product id")}</th>
                    <th>{t("Customer")}</th>
                    <th className="p-3">{"Total"}</th>
                    <th>{t("Payment")}</th>
                    <th>{t("Status")}</th>
                    <th>{t("Action")}</th>
                  </tr>
                </thead>
                <tbody className="text-center bg-green dark:bg-dbg  text-[14px]  ">
                  {order.map((order, i) => (
                    <tr key={order.id} className="hover:bg-red transation-all">
                      <td className="flex items-center gap-1 justify-center p-4">
                        {i + 1}
                      </td>
                      <td>{order.customer}</td>
                      <td>{order.total as React.ReactNode}$</td>
                      <td>{order.method == 0 ? "Cash" : "Card"}</td>
                      <td>{status[order.status as number]}</td>
                      <td>
                        <Button
                          // disabled={order.status == 2}
                          className="btn-green"
                          onClick={() => handleStatus(order.id as number)}
                        >
                          {t("Next Stage")}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminOrder;
