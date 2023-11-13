import React from "react";
import Title from "../../UI/title";
import Button from "../../UI/button";
import { useTranslations } from "next-intl";

const AdminOrder = () => {
  const t = useTranslations("AdminOrder");

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
                  <tr>
                    <td className="flex items-center gap-1 justify-center p-4">
                      324242343
                    </td>
                    <td>Baktar Asad</td>
                    <td>Kurdamir</td>
                    <td>$ 34</td>
                    <td>lorem</td>
                    <td>
                      <Button className="btn-red">{t("Next Stage")}</Button>
                    </td>
                  </tr>
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
