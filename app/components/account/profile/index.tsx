"use client";
import { profileContentList } from "@/app/constants/profile/profile";
import { IProfile } from "@/app/types/profile/IProfile";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Settings from "../settings";
import Password from "../password";
import Order from "../order";
import { useTranslations } from "next-intl";
import cookie from "js-cookie";
import { useParams, useRouter } from "next/navigation";
import { IUser } from "@/app/types/user/IUser";
import { getHeader, patchHeader } from "@/app/service/httpService";
import { avatarList } from "@/app/constants/avatar/avatarList";
import { TfiClose } from "react-icons/tfi";

const Profile: React.FC<IProfile> = ({ src, title }) => {
  const [tabs, setTabs] = useState<number>(0);
  const [user, setUser] = useState<IUser | null>();
  const [isAvatar, setIsAvatar] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<number>(0);
  const t = useTranslations("Profile");
  const { push, refresh } = useRouter();
  const { id } = useParams();

  const signOut = (): void => {
    cookie.remove("token");
    cookie.remove("id");
    push("/");
    refresh();
  };

  const handleProfile = async (value: string) => {
    const { statusCode } = await patchHeader(`/users/update/${id}`, {
      body: { file: value },
    });

    if (statusCode === 200) {
      setAvatar(avatarList.findIndex((avatar) => avatar.file == value));
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const { data, statusCode } = await getHeader(`/users/get/${id}`);
      if (statusCode === 200) {
        setUser(data);
        setAvatar(avatarList.findIndex((avatar) => avatar.file == data.file));
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section>
        <div className=" w-11/12 mx-auto flex flex-col md:flex-row gap-2 md:gap-10">
          <div className=" dark:border-[#EBE3D5] min-w-full md:min-w-[250px] hover:scale-[0.98] transition-all  mb-16 md:mb-36">
            <div className="flex flex-col items-center my-5 md:my-2">
              <Image
                src={avatarList[avatar].src || ""}
                alt={user?.fullname || "unknown"}
                width={130}
                height={100}
                className=" mt-3 border-red border rounded-[100%] border-[3px]"
                onClick={() => setIsAvatar(true)}
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
                  } flex items-center gap-1 borde  dark:border-[#EBE3D5] justify-center text-base py-2 font-mont hover:bg-red transition-all hover:text-white`}
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
              <Settings {...user} id={id} setState={setUser} />
            ) : tabs == 1 ? (
              <Password id={id} />
            ) : tabs == 2 ? (
              <Order />
            ) : null}
          </div>
        </div>
        {isAvatar && (
          <div className="fixed top-0 w-screen bg-green opacity-[0.98] h-screen flex items-center justify-center">
            <div className="w-[300px] md:w-[400px] p-2 pb-4 rounded bg-[#C5FFF8] relative   h-fit border border-[3px]">
              <h2 className="font-mont dark:text-black text-2xl font-bold text-center py-5">
                Avatar List
              </h2>
              <div className="flex gap-3 justify-center mt-3 flex-wrap">
                {avatarList?.map((avatar, index) => (
                  <div
                    key={avatar.file}
                    className="relative w-[70px] md:w-[100px] h-[70px] md:h-[100px]"
                  >
                    <Image
                      src={avatar.src}
                      onClick={() => {
                        handleProfile(avatar.file);
                      }}
                      layout="fill"
                      objectFit="cover"
                      alt={user?.fullname || "profile"}
                      className="rounded-full border-red  hover:border hover:border-[3px] hover:scale-97 transition-all"
                    />
                  </div>
                ))}
              </div>
              <TfiClose
                onClick={() => setIsAvatar(false)}
                className="text-3xl text-red absolute top-1 right-1 cursor-pointer"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Profile;
