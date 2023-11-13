import React from "react";
import Title from "../../UI/title";
import Button from "../../UI/button";
import { useTranslations } from "next-intl";

const AdminProducts = () => {
  const t = useTranslations("AdminProduct");

  return (
    <>
      <section>
        <div className="mb-20">
          <Title className="text-2xl md:text-3xl font-semibold mt-0 md:mt-6 mb-4">
            {t("Products")}
          </Title>
          <div className="overflow-x-auto ">
            <div>
              <table className="bg-[#162A2D] w-full font-mont min-w-[800px] text-white">
                <thead className="uppercase text-xs">
                  <tr>
                    <th className="p-3">{t("image")}</th>
                    <th>{t("id")}</th>
                    <th>{t("title")}</th>
                    <th>{t("price")}</th>
                    <th>{t("action")}</th>
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
                    <td>
                      <Button className="btn-red">{t("delete")}</Button>
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

export default AdminProducts;
