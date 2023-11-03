"use client";
import React, { useEffect, useState } from "react";
import Title from "../../UI/title";
import CustomerItem from "../customerItem";
import client1 from "./assets/images/client1.jpg";
import client2 from "./assets/images/client2.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { customers } from "@/app/constants/customer/customers";
const CustomerList = () => {
  const [next, setNext] = useState<number>(1);
  const [back, setBack] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextCustomer();
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [next | back]);

  const handleNextCustomer = (): void => {
    if (next < customers.length - 1) {
      setNext(next + 1);
      setBack(back + 1);
    } else {
      setBack(0);
      setNext(1);
    }
  };

  const handleBackCustomer = (): void => {
    if (back > 0) {
      setNext(next - 1);
      setBack(back - 1);
    } else {
      setBack(customers.length - 2);
      setNext(customers.length - 1);
    }
  };
  return (
    <>
      <section className="mt-20 ">
        <div className="w-8/12 mx-auto text-center">
          <Title className="font-black text-3xl font-dancing mt-10 mb-5">
            What Says Our Customers
          </Title>
          <div className="flex gap-8">
            <CustomerItem
              description={customers[back].description}
              src={customers[back].src}
              subTitle={customers[back].subTitle}
              title={customers[back].title}
            />
            <div className="hidden md:block">
              <CustomerItem
                description={customers[next].description}
                src={customers[next].src}
                subTitle={customers[next].subTitle}
                title={customers[next].title}
              />
            </div>
          </div>
          <div className="flex gap-[7px] justify-center mt-3">
            <div
              className="bg-red text-white p-2 rounded-full font-bold cursor-pointer hover:bg-black transition-all"
              onClick={() => handleBackCustomer()}
            >
              <IoIosArrowBack />
            </div>
            <div
              className="bg-red text-white p-2 rounded-full font-bold cursor-pointer hover:bg-black transition-all "
              onClick={() => handleNextCustomer()}
            >
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerList;
