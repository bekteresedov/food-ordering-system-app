"use client";
import { profileContentList } from "@/app/constants/profile/profile";
import { IProfile } from "@/app/types/profile/IProfile";
import Image from "next/image";
import React, { useState } from "react";
import Settings from "../settings";
import Password from "../password";
import Order from "../order";
import { useTranslations } from "next-intl";

const Profile: React.FC<IProfile> = ({ src, title }) => {
  const [tabs, setTabs] = useState<number>(0);
  const t = useTranslations("Profile");

  return (
    <>
      <section>
        <div className="min-h-[400px] w-11/12 mx-auto flex flex-col md:flex-row gap-2 md:gap-10">
          <div className="border dark:border-t-0  dark:border-[#EBE3D5] min-w-full md:min-w-[250px] hover:scale-[0.98] transition-all bg-white dark:bg-dbg mb-16 md:mb-40">
            <div className="flex flex-col items-center">
              <Image
                src={src}
                alt={title}
                width={100}
                height={100}
                className="rounded-full mt-3"
              />
              <h2 className="font-mont font-bold text-base my-3">{title}</h2>
            </div>

            <ul className="">
              {profileContentList.map((element, index) => (
                <li
                  key={element.title}
                  onClick={() => setTabs(index)}
                  className={`${
                    tabs == index && "bg-red text-white"
                  } flex items-center gap-1 border-y border-b-0  dark:border-[#EBE3D5] justify-center text-base py-2 font-mont hover:bg-red transition-all hover:text-white`}
                >
                  {<element.iconType />}
                  <span className="text-[13px] font-semibold">
                    {t(element.title)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            {tabs == 0 ? (
              <Settings />
            ) : tabs == 1 ? (
              <Password />
            ) : tabs == 2 ? (
              <Order />
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
