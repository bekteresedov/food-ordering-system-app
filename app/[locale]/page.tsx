import Image from "next/image";
import Header from "../components/layout/header";
import { useTranslations } from "next-intl";
import Localization from "../components/localization";
export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <Header />
      <div className="h-[100px]">alma</div>
      <div>
        <Localization />
      </div>
      <div>
        <p>{t("title")}</p>
        <p>{t("Home")}</p>
      </div>
    </>
  );
}
