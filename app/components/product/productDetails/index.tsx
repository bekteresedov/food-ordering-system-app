import Image from "next/image";
import React from "react";
import pizza from "./assets/images/pizza6.png";
import Title from "../../UI/title";
import size from "./assets/images/size.png";
import Input from "../../UI/input";
import Button from "../../UI/button";
const ProductDetails = () => {
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row items-center h-[51  0vh] md:h-screen gap-[50px] md:gap-[100px] w-10/12 mx-auto">
          <div>
            <Image src={pizza} alt="pizza" />
          </div>
          <div>
            <Title className="text-4xl font-bold mb-2">Good Pizza</Title>
            <span className="text-red border-b border-red font-bold">$10</span>
            <p className="font-mont mb-4 mt-6 text-[13px] font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, at. lorem ipsum .
            </p>
            <div>
              <h2 className="font-bold font-mont mb-2 cursor-pointer">
                Choose the size
              </h2>
              <div className="flex items-center gap-10">
                <div className="relative h-8 w-8">
                  <Image src={size} alt="size" layout="fill" />
                  <span className="absolute text-[10px] bg-red rounded px-1 font-medium text-white left-4 top-0">
                    Small
                  </span>
                </div>
                <div className="relative h-10 w-10">
                  <Image src={size} alt="size" layout="fill" />
                  <span className="absolute text-[10px] bg-red rounded px-1 font-medium text-white left-4 top-0">
                    Medium
                  </span>
                </div>
                <div className="relative h-12 w-12">
                  <Image src={size} alt="size" layout="fill" />
                  <span className="absolute text-[10px] bg-red rounded px-1 font-medium text-white left-8 top-0">
                    Large
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-5 mb-4">
              <div className="flex items-center gap-1">
                <Input type="checkbox" id="ketcap" />
                <label
                  htmlFor="ketcap"
                  className="text-xs text-semibold font-mont"
                >
                  ketcap
                </label>
              </div>
              <div className="flex items-center gap-1">
                <Input type="checkbox" id="ketcap" />
                <label
                  htmlFor="ketcap"
                  className="text-xs text-semibold font-mont"
                >
                  ketcap
                </label>
              </div>
            </div>
            <Button className="btn-red">Add to Cart</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
