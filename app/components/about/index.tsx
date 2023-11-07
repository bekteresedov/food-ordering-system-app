"use client";
import Image from "next/image";
import React, { useState } from "react";
import about from "./assets/images/about-img.png";
import Title from "../UI/title";
import Button from "../UI/button";
import { useTranslations } from "next-intl";
const About = () => {
  const [more, setMore] = useState<boolean>(false);
  const t = useTranslations("About");

  return (
    <>
      <section className="dark:bg-dbg bg-green text-white ">
        <div className="w-8/12 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 py-10">
            <div className="w-4/12  hidden md:block">
              <Image src={about} alt="About" width={300} height={350} />
            </div>
            <div className="w-full md:w-8/12">
              <Title className="font-black text-3xl ">
                {t("We Are Baktar")}
              </Title>
              <div className="my-4 font-mont text-[13px] md:text-[14px]">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don`t look
                  even lorem Ipsum in any sense and are not actually form, by
                  injected humour, or randomised words which don`t look even
                  lorem Ipsum in any sense and are not actually
                </p>
                <p className={`${more ? "block" : "hidden"}`}>
                  slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn`t anything
                  embarrassing hidden in the middle of text. All Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Reprehenderit,
                  dolores!
                </p>
              </div>

              <Button className="btn-red" onClick={() => setMore(!more)}>
                {t("Read More")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
