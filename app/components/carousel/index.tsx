"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import hero1 from "./assets/images/hero-bg.jpg";
import Title from "../UI/title";
import Button from "../UI/button";
import { useTranslations } from "next-intl";
const Coursel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const t = useTranslations("Carousel");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % 3); // 3 slaytınız varsa 3 yerine slayt sayısını yazabilirsiniz
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div
        style={{
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Carousel selectedItem={activeSlide} showThumbs={false}>
          <div className="relative">
            <Image
              src={hero1}
              alt="Image 1"
              style={{ height: "auto", width: "100%" }}
            />
            <div className="absolute text-white top-0">
              <div className=" w-10/12 mx-auto mt-[7%] md:mt-[15%]">
                <div className="w-8/12 md:w-6/12 text-start">
                  <Title className="text-2xl md:text-4xl ">
                    {t("Fast Food Restaurant")}
                  </Title>
                  <p className="font-mont text-[9px] md:text-[14px] mt-1 md:mt-4 w-full md:w-10/12">
                    Doloremque, itaque aperiam facilis rerum, commodi,
                    temporibus sapiente ad mollitia laborum quam quisquam esse
                    error unde. Tempora ex doloremque, labore, sunt repellat
                    dolore, iste magni quos nihil ducimus libero ipsam.
                  </p>
                  <Button className="mt-2 md:mt-4 text-white px-[15px] md:px-[20px] py-[4.5px] md:py-[8px] rounded-3xl bg-red cursor-pointer hover:opacity-70 transition-all text-[8px] md:text-xs">
                    {t("Order Now")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={hero1}
              alt="Image 1"
              style={{ height: "auto", width: "100%" }}
            />
            <div className="absolute text-white top-0">
              <div className=" w-10/12 mx-auto mt-[7%] md:mt-[15%]">
                <div className="w-8/12 md:w-6/12 text-start">
                  <Title className="text-2xl md:text-4xl font-dancing ">
                    {t("Fast Food Restaurant")}
                  </Title>
                  <p className="font-mont text-[9px] md:text-[14px] mt-1 md:mt-4 w-full md:w-10/12">
                    Doloremque, itaque aperiam facilis rerum, commodi,
                    temporibus sapiente ad mollitia laborum quam quisquam esse
                    error unde. Tempora ex doloremque, labore, sunt repellat
                    dolore, iste magni quos nihil ducimus libero ipsam.
                  </p>
                  <Button className="mt-2 md:mt-4 text-white px-[15px] md:px-[20px] py-[4.5px] md:py-[8px] rounded-3xl bg-red cursor-pointer hover:opacity-70 transition-all text-[8px] md:text-xs">
                    {t("Order Now")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Coursel;
