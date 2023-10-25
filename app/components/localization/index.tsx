"use client";
import React, { useState } from "react";
import Link from "next-intl/link";
import aze from "./assets/images/aze.svg";
import eng from "./assets/images/eng.svg";

import Image from "next/image";
const Localization = () => {
  const [lang, setLang] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col items-center gap-1 group">
        <div>
          {!lang ? (
            <Link href="/" locale="en">
              <Image src={eng} alt="eng" width={18} />
            </Link>
          ) : (
            <Link href="/" locale="aze" className="pt-1">
              <Image src={aze} alt="aze" width={18} />
            </Link>
          )}
        </div>
        <div className=" hidden group-hover:block absolute  pt-6">
          {lang ? (
            <Link href="/" locale="en">
              <Image
                src={eng}
                alt="eng"
                width={18}
                onClick={() => setLang(false)}
              />
            </Link>
          ) : (
            <Link href="/" locale="aze" className="pt-1">
              <Image
                src={aze}
                alt="aze"
                width={18}
                onClick={() => setLang(true)}
              />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Localization;
