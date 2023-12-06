import React, { useEffect, useState } from "react";
import Title from "../../UI/title";
import Button from "../../UI/button";
import { useTranslations } from "next-intl";
import AddProduct from "../addProduct";
import { deleteHeader, get, patchHeader } from "@/app/service/httpService";
import { IProduct } from "@/app/types/admin/IAdminProduct";
import Image from "next/image";
import Input from "../../UI/input";
import OutsideClickHandler from "react-outside-click-handler";

const AdminProducts = () => {
  const t = useTranslations("AdminProduct");
  const [click, setClick] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>();
  const [isCamp, setIsCamp] = useState<boolean>(false);
  const [camp, setCamp] = useState<string>();
  const [data, setData] = useState<{ id: string; isCamp: boolean }>();
  const fetchData = async () => {
    const { data, statusCode } = await get("/products/all");
    if (statusCode === 200) {
      setProducts(data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: string): Promise<void> => {
    const { statusCode } = await deleteHeader("/products/delete/" + id);
    if (statusCode === 200) {
      setProducts(products?.filter((p) => p.productId !== id));
    }
  };

  const handleCamp = async (id: string, isAdd: boolean): Promise<void> => {
    const { statusCode } = await patchHeader("/products/update/" + id, {
      body: {
        campaign: {
          campaignRate: !isAdd ? 0 : Number(camp),
          isCampaign: isAdd,
        },
      },
    });
    if (statusCode === 200) {
      await fetchData();
      setIsCamp(false);
    }
  };

  return (
    <>
      <section>
        <div className="mb-20 relative">
          <Title className="text-2xl md:text-3xl font-semibold mt-0 md:mt-6 mb-6">
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
                <tbody className="text-center bg-green dark:bg-dbg  text-[14px] ">
                  {products?.map((product, index) => (
                    <tr key={product.productId} className="border-t">
                      <td className=" flex items-center gap-1 justify-center p-4 mt-1 py-2">
                        <div className="relative w-12 h-12 border border-white rounded-full border-1">
                          <Image
                            src={product.img}
                            alt={product.productName}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                          />
                        </div>
                      </td>
                      <td>{index}</td>
                      <td>{product.productName}</td>
                      <td>$ {product.price}</td>
                      <td>
                        <Button
                          className="btn-red"
                          onClick={() =>
                            handleDelete(product.productId as string)
                          }
                        >
                          {t("delete")}
                        </Button>
                        <Button
                          className={`${
                            product.campaign?.isCampaign
                              ? "btn-red"
                              : "btn-green"
                          } ml-2`}
                          onClick={() => {
                            setIsCamp(true);
                            setData({
                              id: product.productId as string,
                              isCamp: product.campaign?.isCampaign as boolean,
                            });
                            product.campaign?.isCampaign &&
                              handleCamp(product.productId as string, false);
                          }}
                        >
                          {product.campaign?.isCampaign
                            ? t("un camaign")
                            : t("camaign")}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {isCamp && (
            <OutsideClickHandler
              onOutsideClick={() => {
                setIsCamp(false);
              }}
            >
              {!data?.isCamp && (
                <div className="absolute top-0 right-0 w-fit flex col-2 bg-white p-3  rounded">
                  <Input
                    className="w-[100px] py-1 px-3"
                    onChange={(e) => setCamp(e.target.value)}
                  />
                  <Button
                    className="bg-[green] text-xs text-white font-bold font-mont p-1"
                    onClick={() => handleCamp(data?.id as string, true)}
                  >
                    Add
                  </Button>
                </div>
              )}
            </OutsideClickHandler>
          )}
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
            <AddProduct
              setState={setProducts}
              state={products}
              setClick={setClick}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default AdminProducts;
