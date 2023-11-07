import About from "@/app/components/about";
import CampaignList from "@/app/components/campaign/campaignList";
import Coursel from "@/app/components/carousel";
import CustomerList from "@/app/components/customer/customerList";
import MenuList from "@/app/components/menu/menuList";
import Reservation from "@/app/components/reservation";
import React from "react";

const Page = () => {
  return (
    <>
      <main>
        <div>
          <Coursel />
        </div>
        <div className="my-16">
          <CampaignList />
        </div>
        <div>
          <MenuList />
        </div>
        <div className="mt-16">
          <About />
        </div>
        <div className="mt-6">
          <Reservation />
        </div>
        <div className="my-16">
          <CustomerList />
        </div>
      </main>
    </>
  );
};

export default Page;
