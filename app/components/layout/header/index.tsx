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
      <header className="bg-secondary">
        <div className="flex justify-between items-center text-[#fff] py-[15px] w-10/12 mx-auto">
          <div>
            <Logo>Feane</Logo>
          </div>
          <div>
            <NavList />
          </div>
          <div>
            <ul className="flex gap-2 items-center">
              {/* <li className="text-[16px] hover:text-primary transition-all cursor-pointer">
                <GiWorld />
              </li> */}
              <li className="text-[16px] hover:text-primary transition-all cursor-pointer">
                <FaUserAlt />
              </li>
              <li className="text-[16px] hover:text-primary transition-all cursor-pointer">
                <FaShoppingCart />
              </li>
              <li
                className="text-[16px] hover:text-primary transition-all cursor-pointer relative"
                onClick={() => setClick(!click)}
              >
                <FaSearch />
                {click && (
                  <div className="absolute">
                    <SearchList />
                  </div>
                )}
              </li>
              <li>
                <button className="btn-primary">Order Online</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
