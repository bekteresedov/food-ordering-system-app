import React, { useEffect, useState } from "react";
import Title from "../../UI/title";
import Input from "../../UI/input";
import Button from "../../UI/button";
import {
  IAddProductsProps,
  IExtraProduct,
  IProduct,
} from "@/app/types/admin/IAdminProduct";
import { TfiClose } from "react-icons/tfi";
import { ICategoryResponse } from "@/app/types/admin/IAdminCategory";
import { get, postHeader } from "@/app/service/httpService";
import { useTranslations } from "next-intl";

const AddProduct: React.FC<IAddProductsProps> = ({
  setClick,
  setState,
  state,
}) => {
  const [extraProducts, setExtraProducts] = useState<IExtraProduct[]>([]);
  const [extraProduct, setExtraProduct] = useState<IExtraProduct>();
  const [categories, setCategories] = useState<ICategoryResponse[]>([]);
  const t = useTranslations("AddProduct");

  const handleProduct = (): void => {
    if (extraProduct) {
      setExtraProducts([...extraProducts, extraProduct]);
    }
  };

  const handleCreate = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const img = form.img.value;
    const title = form.tt.value;
    const desc = form.desc.value;
    const category = form.category.value;
    const price = form.price.value;
    if (img && category && desc && price && title) {
      const { data, statusCode } = await postHeader(
        {
          body: {
            category_id: Number(category),
            productName: title,
            description: desc,
            price: price,
            img: img,
            extraOptions: extraProducts,
          },
        },
        "/products/save"
      );

      if (statusCode == 200) {
        console.log("Success");
        setState([...(state as IProduct[]), data]);
        setClick(false);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, statusCode } = await get("/categories/all");
      if (statusCode === 200) {
        setCategories(data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="mt-2 w-[500px] h-fit rounded p-10 bg-white relative">
        <Title className="text-3xl text-black font-bold text-center m-4">
          Add a New Product
        </Title>
        <form onSubmit={handleCreate}>
          <div>
            <label
              htmlFor="img"
              className="font-mont font-medium  text-[13px] "
            >
              {t("image url")}
            </label>
            <Input
              id="img"
              className="py-2 px-1 my-1"
              placeholder={t("image url")}
            />
          </div>
          <div>
            <label htmlFor="tt" className="font-mont font-medium  text-[13px] ">
              {t("title")}
            </label>
            <Input
              id="tt"
              className="py-2 px-1 my-1"
              placeholder={t("title")}
            />
          </div>
          <div>
            <label
              htmlFor="desc"
              className="font-mont font-medium  text-[13px] "
            >
              {t("description")}
            </label>
            <Input
              id="desc"
              className="py-2 px-1 my-1 mb-2"
              placeholder={t("description")}
            />
          </div>
          <div>
            <label
              className="block font-mont font-medium  text-[13px] "
              htmlFor="category"
            >
              {t("selectCategory")}
            </label>
            <select
              id="category"
              className="w-full p-1 border my-1 rounded dark:text-white text-green  text-sm outline-none py-2"
            >
              {categories.map((category) => (
                <option key={category.categoryId} value={category.categoryId}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="price"
              className="font-mont font-medium  text-[13px] "
            >
              {t("price")}
            </label>
            <Input
              id="price"
              className="py-2 px-1 mb-1"
              placeholder={t("price")}
            />
          </div>
          <div className="text-end mt-4">
            <Button className="btn-green" type="submit">
              {t("Create")}
            </Button>
          </div>
        </form>
        <TfiClose
          onClick={() => setClick(false)}
          className=" absolute top-2 right-2 text-3xl text-red absolute top-1 right-1 cursor-pointer"
        />
      </div>
    </>
  );
};

export default AddProduct;
