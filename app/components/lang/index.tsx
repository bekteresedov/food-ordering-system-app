"use client";

import React from "react";
import { usePathname, useRouter } from "next-intl/client";
import Link from "next-intl/link";
import Image from "next/image";
import aze from "./assets/images/aze.svg";
import usa from "./assets/images/usa.svg";

function LangSwitch() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1 ">
      <li>
        <Link href={pathname} locale="az">
          <Image src={aze} alt="AZE Flag" className="w-[25px] md:w-[17px]" />
        </Link>
      </li>
      <li>
        <Link href={pathname} locale="en">
          <Image src={usa} alt="USA Flag" className="w-[25px] md:w-[17px]" />
        </Link>
      </li>
    </ul>
  );
}

export default LangSwitch;
