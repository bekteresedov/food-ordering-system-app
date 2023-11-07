import { INav } from "@/app/types/header/INav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItem: React.FC<INav> = ({ href, name }) => {
  const pathname = usePathname();

  return (
    <>
      <div className="group flex ">
        <Link
          href={href}
          className={`uppercase font-mont font-semibold border-red ${
            pathname == href && "border-b "
          } cursor-pointer text-lg md:text-xs pb-1`}
        >
          {name}
        </Link>
        {pathname == href && <sup className="mt-1 ml-1  text-red">&#9679;</sup>}
      </div>
    </>
  );
};

export default NavItem;
