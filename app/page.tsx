import Image from "next/image";
import Logo from "./components/UI/logo";
import Header from "./components/layout/header";
import Head from "next/head";
import ThemeSwitcher from "./components/theme/themeSwitcher/index";

export default function Home() {
  return (
    <>
      <Header />

      <div className="h-[600px]">alma</div>
      <ThemeSwitcher />
    </>
  );
}
