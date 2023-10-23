import React from "react";
import Link from "next-intl/link";
import aze from "./assets/images/aze.svg";
import eng from "./assets/images/eng.svg";

import Image from "next/image";
const Localization = () => {
  return (
    <>
      <div>
        <Link href="/" locale="en">
          <Image src={eng} alt="eng" width={20} />
        </Link>
        <Link href="/" locale="aze">
          <Image src={aze} alt="aze" width={20} />
        </Link>
      </div>
    </>
  );
};

export default Localization;
