import React from "react";
import Title from "../../UI/title";

const Footer = () => {
  return (
    <>
      <footer className="bg-green dark:bg-dbg  text-white pt-10 pb-5">
        <div className="flex gap-10 w-8/12 mx-auto ">
          <ul className="w-4/12">
            <li>
              <Title className="text-2xl">Contact Us</Title>
            </li>
          </ul>
          <ul className="w-4/12">
            <li>
              <Title className="text-2xl">Baktar</Title>
            </li>
            <li>
              <p className="text-[12.5px] font-mont mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                cum dicta accusantium maiores veritatis non tempore sapiente
              </p>
            </li>
          </ul>
          <ul className="w-4/12">
            <Title className="text-2xl">Opening Hours</Title>
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
