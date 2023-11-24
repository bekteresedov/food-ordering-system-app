import React, { useEffect, useState } from "react";
import Title from "../../UI/title";
import Input from "../../UI/input";
import Button from "../../UI/button";
import { useTranslations } from "next-intl";
import { deleteHeader, get, postHeader } from "@/app/service/httpService";
import { ICategoryResponse } from "@/app/types/admin/IAdminCategory";
import { IResponse } from "@/app/types/share/IResponse";

const AdminCategory = () => {
  const [inputText, setInputText] = useState<string>("");
  const [categories, setCategories] = useState<ICategoryResponse[]>([]);

  const t = useTranslations("AdminCategory");

  const handleAdd = async () => {
    if (inputText.trim() === "") return;
    const response: IResponse = await postHeader(
      { body: { categoryName: inputText } },
      "/categories/save"
    );
    if (response.statusCode === 200) {
      setInputText("");
      setCategories([...categories, response.data]);
    }
  };

  const handleDelete = async (categoryId: string) => {
    const response = await deleteHeader("/categories/delete/" + categoryId);
    if (response.statusCode == 200) {
      setCategories(categories.filter((c) => c.categoryId != categoryId));
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
      <section>
        <div className="mb-20">
          <Title className="text-2xl md:text-3xl font-semibold mt-0 md:mt-6 mb-4">
            {t("Category")}
          </Title>
          <div>
            <div className="flex w-full gap-5">
              <div className="w-10/12">
                <Input
                  className="py-2 px-1 w-fit"
                  placeholder={t("Add New Category")}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>
              <Button className="btn-green uppercase" onClick={handleAdd}>
                {t("Add")}
              </Button>
            </div>
            <div>
              <ul className="mt-10">
                {categories?.map((category) => (
                  <li
                    key={category.categoryId}
                    className="flex justify-between mt-3 border-b pb-1 w-10/12"
                  >
                    <span className="font-mont font-semibold cursor-pointer">
                      {category.categoryName}
                    </span>
                    <Button
                      className="btn-red"
                      onClick={() => handleDelete(category.categoryId)}
                    >
                      {t("Delete")}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminCategory;
