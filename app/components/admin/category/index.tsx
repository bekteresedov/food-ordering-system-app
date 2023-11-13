import React, { useState } from "react";
import Title from "../../UI/title";
import Input from "../../UI/input";
import Button from "../../UI/button";
import { useTranslations } from "next-intl";

const AdminCategory = () => {
  const [inputText, setInputText] = useState<string>("");
  const [categories, setCategories] = useState<string[]>(["pizza"]);
  const t = useTranslations("AdminCategory");

  const handleAdd = (): void => {
    if (inputText.trim() === "") return;
    setCategories([...categories, inputText.trim()]);
    setInputText("");
  };

  const handleDelete = (value: string): void => {
    setCategories(categories.filter((c) => c != value));
  };
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
                {categories.map((category) => (
                  <li
                    key={category}
                    className="flex justify-between mt-3 border-b pb-1 w-10/12"
                  >
                    <span className="font-mont font-semibold cursor-pointer">
                      {category}
                    </span>
                    <Button
                      className="btn-red"
                      onClick={() => handleDelete(category)}
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
