import React from "react";
import Title from "../../UI/title";
import CustomerItem from "../customerItem";
import client1 from "./assets/images/client1.jpg";
import client2 from "./assets/images/client2.jpg";

const CustomerList = () => {
  return (
    <>
      <section className="mt-20">
        <div className="w-8/12 mx-auto text-center">
          <Title className="font-black text-3xl font-dancing my-10">
            What Says Our Customers
          </Title>
          <div>
            <CustomerItem
              description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam"
              src={client1}
              subTitle="magna aliqua"
              title="Moana Michell"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerList;
