import { profileContentList } from "@/app/constants/profile/Profile";
import { IProfile } from "@/app/types/profile/IProfile";
import Image from "next/image";
import React from "react";
import Settings from "../settings";

const Profile: React.FC<IProfile> = ({ src, title }) => {
  return (
    <>
      <section>
        <div className="min-h-[400px] w-11/12 mx-auto flex gap-10">
          <div className="border dark:border-t-0  dark:border-[#EBE3D5] min-w-[250px] hover:scale-[0.98] transition-all bg-white dark:bg-dbg mb-40">
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
                  className="flex items-center gap-1 border-y border-b-0  dark:border-[#EBE3D5] justify-center text-base py-2 font-mont hover:bg-red transition-all hover:text-white"
                >
                  {<element.iconType />}
                  <span className="text-[13px] font-semibold">
                    {element.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <Settings />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
