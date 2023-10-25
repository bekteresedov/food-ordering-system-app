import React from "react";
import Link from "next-intl/link";
import aze from "./assets/images/aze.svg";
import eng from "./assets/images/eng.svg";

import Image from "next/image";
const Localization = () => {
  return (
    <>
      <div className="flex gap-1">
        <Link href="/" locale="en">
          <Image src={eng} alt="eng" width={18} />
        </Link>
        <Link href="/" locale="aze">
          <Image src={aze} alt="aze" width={18} />
        </Link>
      </div>
    </>
  );
};

export default Localization;
