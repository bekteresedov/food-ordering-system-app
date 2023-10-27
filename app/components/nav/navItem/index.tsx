import { INav } from "@/app/types/header/INav";
import Link from "next/link";
import React from "react";

const NavItem: React.FC<INav> = ({ href, name }) => {
  return (
    <>
      <div className="group flex ">
        <Link
          href={href}
          className="uppercase font-mont font-semibold border-red hover:border-b transition-all cursor-pointer text-lg md:text-xs pb-1"
        >
          {name.includes(".") ? name.split(".")[2] : name}
        </Link>
        <sup className="mt-1 ml-1 hidden text-red md:group-hover:block ">
          &#9679;
        </sup>
      </div>
    </>
  );
};

export default NavItem;
