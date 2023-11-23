"use client";
import { profileContentList } from "@/app/constants/profile/profile";
import { IProfile, ISettings } from "@/app/types/profile/IProfile";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Settings from "../settings";
import Password from "../password";
import Order from "../order";
import { useTranslations } from "next-intl";
import cookie from "js-cookie";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { IUser } from "@/app/types/user/IUser";
import profile from "./assets/images/Microsoft_Account.svg.png";
const Profile: React.FC<IProfile> = ({ src, title }) => {
  const [tabs, setTabs] = useState<number>(0);
  const [user, setUser] = useState<IUser | null>();
  const t = useTranslations("Profile");
  const { push, refresh } = useRouter();
  const { id } = useParams();

  const signOut = (): void => {
    cookie.remove("token");
    cookie.remove("id");
    push("/");
    refresh();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/get/${id}`,
          {
            headers: {
              Authorization: cookie.get("token"),
            },
          }
        );
        setUser(response.data.data);
      } catch (error: any) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section>
        <div className="h-[400px] w-11/12 mx-auto flex flex-col md:flex-row gap-2 md:gap-10">
          <div className="border dark:border-t-0  dark:border-[#EBE3D5] min-w-full md:min-w-[250px] hover:scale-[0.98] transition-all bg-white dark:bg-dbg mb-16 md:mb-40">
            <div className="flex flex-col items-center ">
              <Image
                src={user?.file || profile}
                alt={user?.fullname || "unknown"}
                width={130}
                height={100}
                className="rounded-xl mt-3"
              />
              <h2 className="font-mont font-bold text-base my-3">
                {user?.fullname || "User"}
              </h2>
            </div>
            <ul className="">
              {profileContentList.map((element, index) => (
                <li
                  key={element.title}
                  onClick={() => {
                    setTabs(index);
                    element.title == "Exit" && signOut();
                  }}
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
            {tabs == 0 && user ? (
              <Settings {...user} id={id} setState={setUser} state={user} />
            ) : tabs == 1 ? (
              <Password id={id} />
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
