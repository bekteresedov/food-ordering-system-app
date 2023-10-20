"use client";
import React, { useState } from "react";
import Logo from "../../UI/logo";
import NavList from "../../nav/navList";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import SearchList from "../../search/searchList";
import Button from "../../UI/button";
const Header = () => {
  const [click, setClick] = useState<boolean>(false);
  const handleClick = (): void => {
    setClick(!click);
  };

  return (
    <>
      <header className="bg-green shadow-header">
        <div className="flex justify-between items-center  py-[10px] w-10/12 mx-auto">
          <div>
            <Logo>Baktar</Logo>
          </div>
          <div className="hidden md:block">
            <NavList />
          </div>
          <div>
            <ul className="flex gap-2 items-center text-white  ">
              <li>
                <GiWorld className="text-base md:text-base hover:text-red transition-all cursor-pointer" />
              </li>
              <li>
                <FaUserAlt className="text-base hover:text-red transition-all cursor-pointer" />
              </li>
              <li>
                <FaShoppingCart className="text-base hover:text-red transition-all cursor-pointer" />
              </li>
              <li className="relative">
                <FaSearch
                  className="text-base hover:text-red transition-all cursor-pointer "
                  onClick={() => handleClick()}
                />
                {click && (
                  <div className="absolute top-10 right-0">
                    <SearchList onClick={handleClick} />
                  </div>
                )}
              </li>
              <li>
                <Button className="btn-red  hidden md:block">
                  Order Online
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
