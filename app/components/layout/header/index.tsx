"use client";
import React, { useState } from "react";
import Logo from "../../UI/logo";
import NavList from "../../nav/navList";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchList from "../../search/searchList";
import Button from "../../UI/button";
import ThemeSwitcher from "../../theme/themeSwitcher";
const Header = () => {
  const [click, setClick] = useState<boolean>(false);
  const [isHamburgerMenu, setIsHamburgerMenu] = useState<boolean>(false);

  const handleClick = (): void => {
    setClick(!click);
  };

  return (
    <>
      <header className={`bg-green dark:bg-dbg shadow-header relative `}>
        <div
          className={`flex justify-between items-center  py-[10px] ${
            isHamburgerMenu ? "w-full md:w-10/12 text-green" : "w-10/12"
          } mx-auto relative`}
        >
          <div>
            <Logo>Baktar</Logo>
          </div>
          <div
            className={` ${isHamburgerMenu ? "block " : "hidden md:block"} `}
          >
            <NavList onClick={setIsHamburgerMenu} isClick={isHamburgerMenu} />
          </div>
          <div>
            <ul className="flex gap-2 items-center text-white  ">
              <ThemeSwitcher />
              <li>
                <GiWorld className="text-base md:text-base hover:text-red transition-all cursor-pointer" />
              </li>
              <li>
                <FaUserAlt className="text-base hover:text-red transition-all cursor-pointer" />
              </li>
              <li>
                <FaShoppingCart className="text-base hover:text-red transition-all cursor-pointer" />
              </li>
              <li>
                <FaSearch
                  className="text-base hover:text-red transition-all cursor-pointer "
                  onClick={() => handleClick()}
                />
              </li>
              <li>
                <Button className="btn-red  hidden md:block">
                  Order Online
                </Button>
              </li>
              <li>
                <RxHamburgerMenu
                  className="text-white text-2xl block md:hidden hover:text-red transition-all"
                  onClick={() => setIsHamburgerMenu(!isHamburgerMenu)}
                />
              </li>
            </ul>
          </div>
          {click && (
            <div className="absolute top-[120px] md:top-[140px] left-1/2 transform -translate-x-1/2 w-full md:w-6/12 ">
              <SearchList onClick={handleClick} />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
