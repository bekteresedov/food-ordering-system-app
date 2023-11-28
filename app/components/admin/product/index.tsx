import React, { useState } from "react";
import Title from "../../UI/title";
import Button from "../../UI/button";
import { useTranslations } from "next-intl";
import AddProduct from "../addProduct";

const AdminProducts = () => {
  const t = useTranslations("AdminProduct");
  const [click, setClick] = useState<boolean>(false);

  return (
    <>
      <section>
        <div className="mb-20">
          <Title className="text-2xl md:text-3xl font-semibold mt-0 md:mt-6 mb-4">
            {t("Products")}
          </Title>
          <div className="overflow-auto max-h-[300px] ">
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
                  </tr>{" "}
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
                  </tr>{" "}
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
                  </tr>{" "}
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
                  </tr>{" "}
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
          <div className="text-end relative">
            <span
              onClick={() => setClick(!click)}
              className="text-2xl bg-red text-white px-4 py-1 rounded-full absolute right-2 top-10 cursor-pointer hover:bg-black transation-all"
            >
              +
            </span>
          </div>
        </div>
        {click && (
          <div className="fixed top-0 left-0 w-full h-screen bg-green opacity-[0.98] flex justify-center">
            <AddProduct setClick={setClick} />
          </div>
        )}
      </section>
    </>
  );
};

export default AdminProducts;
