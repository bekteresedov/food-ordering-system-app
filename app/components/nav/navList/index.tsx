import { navList } from "@/app/constants/header/nav";
import React from "react";
import NavItem from "../navItem";

const NavList = () => {
  return (
    <>
      <div
        className="  
        absolute md:static z-[50] md:-z-[50]  
        flex-col md:flex-row absolute top-0 left-0 bg-red w-full h-[100vh]"
      >
        <nav className="flex gap-2 text-white">
          {navList.map((element, index) => (
            <NavItem key={index} name={element.name} href={element.href} />
          ))}
        </nav>
      </div>
    </>
  );
};

export default NavList;
