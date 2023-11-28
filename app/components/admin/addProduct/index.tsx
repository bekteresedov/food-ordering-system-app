import React, { useEffect, useState } from "react";
import Title from "../../UI/title";
import Input from "../../UI/input";
import Button from "../../UI/button";
import { IExtraProduct } from "@/app/types/admin/IAdminProduct";
import { TfiClose } from "react-icons/tfi";
import {
  ICategoryProps,
  ICategoryResponse,
} from "@/app/types/admin/IAdminCategory";
import { get, postHeader } from "@/app/service/httpService";

const AddProduct: React.FC<ICategoryProps> = ({ setClick }) => {
  const [extraProducts, setExtraProducts] = useState<IExtraProduct[]>([]);
  const [extraProduct, setExtraProduct] = useState<IExtraProduct>();
  const [categories, setCategories] = useState<ICategoryResponse[]>([]);

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
    if (img && category && desc && price && title && extraProducts.length) {
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
        <Title className="text-3xl font-bold text-center m-4">
          Add a New Product
        </Title>
        <form onSubmit={handleCreate}>
          <div>
            <label
              htmlFor="img"
              className="font-mont font-medium  text-[13px] "
            >
              Image URL
            </label>
            <Input
              id="img"
              className="py-2 px-1 my-1"
              placeholder="image url"
            />
          </div>
          <div>
            <label htmlFor="tt" className="font-mont font-medium  text-[13px] ">
              Title
            </label>
            <Input id="tt" className="py-2 px-1 my-1" placeholder="title" />
          </div>
          <div>
            <label
              htmlFor="desc"
              className="font-mont font-medium  text-[13px] "
            >
              Description
            </label>
            <Input
              id="desc"
              className="py-2 px-1 my-1 mb-2"
              placeholder="description"
            />
          </div>
          <div>
            <label
              className="block font-mont font-medium  text-[13px] "
              htmlFor="category"
            >
              Select Category
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
              Price
            </label>
            <Input id="price" className="py-2 px-1 mb-1" placeholder="Price" />
          </div>
          <div>
            <label
              htmlFor="extra"
              className="font-mont font-medium  text-[13px] "
            >
              Extra
            </label>
            <div className="flex gap-5 items-center mb-1">
              <Input
                id="extra"
                className="py-2 px-1 "
                placeholder="title"
                onChange={(e) =>
                  setExtraProduct({ ...extraProduct, title: e.target.value })
                }
              />
              <Input
                className="py-2 px-1"
                placeholder="Price"
                onChange={(e) =>
                  setExtraProduct({ ...extraProduct, price: e.target.value })
                }
              />
              <Button className="btn-red" type="button" onClick={handleProduct}>
                Add
              </Button>
            </div>
            <ul className="flex gap-2 mt-2">
              {extraProducts?.map((product) => (
                <li key={product.title}>
                  <span className="border border-red text-xs py-1 px-2 rounded-2xl text-medium text-red">
                    {product.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-end">
            <Button className="btn-green" type="submit">
              Create
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
