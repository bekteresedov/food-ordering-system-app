import React, { useEffect, useState } from "react";
import Input from "../../UI/input";
import Title from "../../UI/title";
import { MdOutlineCancel } from "react-icons/md";
import { ISearchProps } from "@/app/types/header/ISearch";
import OutsideClickHandler from "react-outside-click-handler";
import SearchItem from "../searchItem";
import { IProduct } from "@/app/types/admin/IAdminProduct";
import { get } from "@/app/service/httpService";
import { useRouter } from "next/navigation";
const SearchList: React.FC<ISearchProps> = ({ onClick }) => {
  const [products, setProducts] = useState<IProduct[]>();
  const [searchProduct, setSearchProduct] = useState<IProduct[]>();
  const { push } = useRouter();

  const handleSearch = (value: string): void => {
    if (value.trim() === "") {
      setSearchProduct([]);
      return;
    }

    setSearchProduct(
      products?.filter((product: IProduct) =>
        product.productName.toLowerCase().includes(value?.toLowerCase())
      )
    );
  };
  useEffect(() => {
    const fetchData = async () => {
      const { data, statusCode } = await get("/products/all");
      if (statusCode === 200) {
        setProducts(data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          onClick();
        }}
      >
        <div className="rounded border p-7 bg-white w-full relative animate__animated  animate__backInUp max-h-[320px] overflow-auto">
          <MdOutlineCancel
            className="text-dark absolute top-2 right-2 text-[26px] "
            onClick={() => onClick()}
          />
          <Title className="text-[2rem] font-dancing font-bold text-dark text-center mb-5 mt-2">
            Search
          </Title>
          <Input
            className="px-5 py-2 w-full mb-4"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <ul>
            {searchProduct?.map((product) => (
              <li
                key={product.productId}
                onClick={() => {
                  push("/product/" + product.productId);
                  onClick();
                }}
              >
                <SearchItem
                  price={product.price}
                  title={product.productName}
                  src={product.img}
                />
              </li>
            ))}
          </ul>
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default SearchList;
