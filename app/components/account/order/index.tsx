import React, { useEffect, useState } from "react";
import Title from "../../UI/title";
import { useTranslations } from "next-intl";
import { IOrder } from "@/app/types/order/IOrder";
import { deleteHeader, getHeader } from "@/app/service/httpService";
import cookie from "js-cookie";
import Button from "../../UI/button";
import Loading from "../../share/loading";

const Order: React.FC<{ email: string }> = ({ email }) => {
  const t = useTranslations("AccountOrders");
  const [order, setOrder] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(true);

  const status = ["Preparing", "On the way", "Delivered"];

  const fetchData = async () => {
    try {
      const { data, statusCode } = await getHeader(`/orders/get/` + email);
      if (statusCode === 200) {
        setOrder(data.filter((order: IOrder) => (order.status as number) < 3));
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: number): Promise<void> => {
    const { statusCode } = await deleteHeader(`/orders/delete/` + id);
    if (statusCode === 200) {
      setOrder(order.filter((order) => order.id != id));
    }
  };

  if (loading) {
    return (
      <>
        <Loading></Loading>
      </>
    );
  }

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
                    <th className="p-3"> id</th>
                    <th>{t("Address")}</th>
                    <th>{t("Total")}</th>
                    <th>{t("Status")}</th>
                    <th>{t("Action")}</th>
                  </tr>
                </thead>
                <tbody className="text-center bg-green dark:bg-dbg  text-[14px] ">
                  {order.map((order, index) => (
                    <tr
                      key={order.id}
                      className="hover:bg-[green] dark:hover:bg-[green] transition-all"
                    >
                      <td className="flex items-center gap-1 justify-center p-4 ">
                        {index + 1}
                      </td>
                      <td>{order.customer}</td>
                      <td>{order.total as number}$</td>
                      <td>{t(status[order.status as number])}</td>
                      <td>
                        <Button
                          className="btn-red"
                          onClick={() => handleDelete(order.id as number)}
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
        </div>
      </section>
    </>
  );
};

export default Order;
