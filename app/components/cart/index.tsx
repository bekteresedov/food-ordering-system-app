import React from "react";
import Title from "../UI/title";
import Button from "../UI/button";
import { IoBagCheckOutline } from "react-icons/io5";
import Image from "next/image";
import pizza from "./assets/images/pizza6.png";
const Cart = () => {
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row gap-20 md:gap-0 justify-between text-white">
          <div className="w-screen md:w-9/12">
            <div className="w-11/12 mx-auto mt-10 overflow-x-auto">
              <table className="bg-[#162A2D] w-full font-mont min-w-[800px]">
                <thead className="uppercase text-xs">
                  <tr>
                    <th className="p-3">Product</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody className="text-center bg-green text-[14px] hover:bg-red transition-all">
                  <tr>
                    <td className="flex items-center gap-1 justify-center p-4">
                      <Image src={pizza} alt="pizza" width={50} height={50} />
                      <span>Good Pizza</span>
                    </td>
                    <td>
                      <span>Aci , </span>
                      <span>Sos , </span>
                      <span>ketcap , </span>
                    </td>
                    <td>
                      <span>$150</span>
                    </td>
                    <td>
                      <span>1</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full md:w-3/12 bg-green pt-[50px] md:pt-[100px] pb-[80px] md:pb-[140px] flex flex-col items-center text-start">
            <ul className="font-mont text-[15px] font-semibold ">
              <li>
                <Title className="uppercase text-2xl ">Cart Total</Title>
              </li>
              <li className="mt-5">
                Subtotal:
                <span className="font-normal ml-1">$12</span>
              </li>
              <li className="mt-1 ">
                Discount:
                <span className="font-normal ml-1">$12</span>
              </li>
              <li className="mt-1 ">
                Total:
                <span className="font-normal ml-1">$12</span>
              </li>
              <li>
                <Button className="uppercase btn-red mt-2 ">
                  Checkout now
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
