"use client";
import React, { useState } from "react";
import Logo from "../../UI/logo";
import NavList from "../../nav/navList";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import SearchList from "../../search/searchList";
const Header = () => {
  const [click, setClick] = useState<boolean>(false);

  return (
    <>
      <header className="bg-green shadow-header">
        <div className="flex justify-between items-center text-white py-[10px] w-10/12 mx-auto">
          <div>
            <Logo>Baktar</Logo>
          </div>
          <div className="hidden md:block">
            <NavList />
          </div>
          <div>
            <ul className="flex gap-2 items-center">
              <li className="text-base md:text-base hover:text-red transition-all cursor-pointer">
                <GiWorld />
              </li>
              <li className="text-base hover:text-red transition-all cursor-pointer">
                <FaUserAlt />
              </li>
              <li className="text-base hover:text-red transition-all cursor-pointer">
                <FaShoppingCart />
              </li>
              <li
                className="text-base hover:text-red transition-all cursor-pointer relative"
                onClick={() => setClick(true)}
              >
                <FaSearch />
                {click && (
                  <div className="absolute top-10 right-0">
                    <SearchList />
                  </div>
                )}
              </li>
              <li>
                <button className="btn-red  hidden md:block">
                  Order Online
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
