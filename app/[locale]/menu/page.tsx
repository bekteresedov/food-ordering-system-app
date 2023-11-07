import MenuList from "@/app/components/menu/menuList";
import { usePathname } from "next/navigation";
import React from "react";

const Page = () => {
  return (
    <>
      <main>
        <div className="my-16">
          <MenuList />
        </div>
      </main>
    </>
  );
};

export default Page;
