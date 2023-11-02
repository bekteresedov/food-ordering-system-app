import { ICustomer } from "@/app/types/customer/ICustomer";
import Image from "next/image";
import React from "react";

const CustomerItem: React.FC<ICustomer> = ({
  description,
  src,
  subTitle,
  title,
}) => {
  return (
    <>
      <div>
        <div>
          <p>{description}</p>
          <h2>{title}</h2>
          <h4>{subTitle}</h4>
        </div>
        <div>
          <Image src={src} alt={title} width={70} height={70} />
        </div>
      </div>
    </>
  );
};

export default CustomerItem;
