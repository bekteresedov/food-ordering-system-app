"use client";
import React, { useState, useEffect } from "react";
import Title from "../../UI/title";
import { IFooterResponse } from "@/app/types/admin/IAdminFooter";
import { get } from "@/app/service/httpService";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
  const [footer, setFooter] = useState<IFooterResponse>();
  useEffect(() => {
    const fetchData = async () => {
      const { data, statusCode } = await get("/footers/get/1");
      if (statusCode === 200) {
        setFooter(data as IFooterResponse);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <footer className="bg-green dark:bg-dbg  text-white pt-10 pb-5">
        <div className="flex flex-col items-center md:items-start md:flex-row  gap-14 md:w-8/12 mx-auto ">
          <ul className="w-10/12 md:w-4/12">
            <li>
              <Title className="text-2xl">Contact Us</Title>
            </li>
            <li className="flex items-center text-[13px] font-mont mt-2 gap-1">
              <FaLocationDot />
              <Link
                href={footer?.location || ""}
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-[12.5px]">Location</span>
              </Link>
            </li>
            <li className="flex items-center text-[13px] font-mont mt-1 gap-1">
              <FaPhone />
              <Link href={`tel:${footer?.phoneNumber || ""}`}>
                <span className="text-[12.5px]">
                  Call {footer?.phoneNumber}
                </span>
              </Link>
            </li>
            <li className="flex items-center text-[13px] font-mont mt-1 gap-1">
              <MdEmail />
              <Link href={`mailto:${footer?.email || ""}`}>
                <span className="text-[12.5px]">{footer?.email}</span>
              </Link>
            </li>
          </ul>
          <ul className="w-10/12 md:w-4/12">
            <li>
              <Title className="text-2xl">Baktar</Title>
            </li>
            <li>
              <p className="text-[12.5px] font-mont mt-2">
                {footer?.description}
              </p>
            </li>
          </ul>
          <ul className="w-10/12 md:w-4/12">
            <li>
              <Title className="text-2xl">Opening Hours</Title>
            </li>
            <li>
              <span className="text-[12.5px] font-mont mt-2">
                {footer?.openingDay}
              </span>
            </li>
            <li>
              <span className="text-[12.5px] font-mont mt-2">
                {footer?.openingHour}
              </span>
            </li>
          </ul>
        </div>
        <p className="text-center mt-10 font-semibold text-xs cursor-pointer hover:text-red transition-all">
          © 2023 Baktar Asad || Full Stack Developer
        </p>
      </footer>
    </>
  );
};

export default Footer;
