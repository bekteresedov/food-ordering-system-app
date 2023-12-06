"use client";
import React, { useEffect, useState } from "react";
import CampaignItem from "../campaignItem";
import { IProduct } from "@/app/types/admin/IAdminProduct";
import { get } from "@/app/service/httpService";
import Loading from "../../share/loading";

const CampaignList = () => {
  const [products, setProducts] = useState<IProduct[]>();
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const { data, statusCode } = await get("/products/all");
      if (statusCode === 200) {
        const filterData: IProduct[] = data.filter(
          (product: IProduct) => product.campaign?.isCampaign == true
        );
        if (filterData.length) setProducts(filterData);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <Loading></Loading>
      </>
    );
  }
  return (
    <>
      <section className="flex w-8/12 mx-auto gap-10 flex-col lg:flex-row">
        {products?.slice(0, 2).map((product) => (
          <CampaignItem
            key={product.productId}
            id={product.productId as string}
            campaign={product.campaign}
            title={product.productName}
            src={product.img}
            price={product.price}
          />
        ))}
      </section>
    </>
  );
};

export default CampaignList;
