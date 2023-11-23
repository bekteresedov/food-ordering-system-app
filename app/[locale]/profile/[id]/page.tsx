import Profile from "@/app/components/account/profile";
import React from "react";
import img from "@/app/components/customer/customerList/assets/images/client1.jpg";
const Page = () => {
  return (
    <>
      <main className="h-[70vh]">
        <div>
          <Profile src={img} title="Baktar Asad" />
        </div>
      </main>
    </>
  );
};

export default Page;
