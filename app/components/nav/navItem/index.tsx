import { INav } from "@/app/types/header/INav";
import Link from "next/link";
import React from "react";

const NavItem: React.FC<INav> = ({ href, name }) => {
  return (
    <>
      <Link
        href={href}
        className="uppercase font-mont font-semibold  hover:text-red transition-all cursor-pointer text-xs"
      >
        {name}
      </Link>
    </>
  );
};

export default NavItem;
