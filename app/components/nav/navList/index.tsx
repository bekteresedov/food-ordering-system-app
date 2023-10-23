import { navList } from "@/app/constants/header/nav";
import React from "react";
import NavItem from "../navItem";
import { VscChromeClose } from "react-icons/vsc";
import { INavProps } from "@/app/types/header/INav";
const NavList: React.FC<INavProps> = ({ onClick, isClick }) => {
  return (
    <>
      <div
        className={` absolute md:static z-[50] md:-z-[50]  
          flex-col md:flex-row fixed top-0 left-0 bg-green opacity-98 w-full md:w-fit h-screen md:h-fit ${
            isClick && `animate__animated animate__rotateInDownLeft`
          }`}
      >
        <VscChromeClose
          onClick={() => onClick(false)}
          className="text-4xl text-white float-right block md:hidden mt-5 mr-3 hover:text-red  transition-all"
        />
        <nav className="flex flex-col md:flex-row  items-end gap-3 md:gap-2 text-white mt-[100px] md:mt-0 mr-8 md:mr-0">
          {navList.map((element, index) => (
            <NavItem key={index} name={element.name} href={element.href} />
          ))}
        </nav>
      </div>
    </>
  );
};

export default NavList;
