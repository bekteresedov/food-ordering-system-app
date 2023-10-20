import { navList } from "@/app/constants/header/nav";
import React from "react";
import NavItem from "../navItem";

const NavList = () => {
  return (
    <>
      <nav className="flex gap-2">
        {navList.map((element, index) => (
          <NavItem key={index} name={element.name} href={element.href} />
        ))}
      </nav>
    </>
  );
};

export default NavList;
