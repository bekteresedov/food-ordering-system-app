import Image from "next/image";
import Header from "../components/layout/header";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      <Header />

      <div className="h-[600px]">alma</div>
      <div>
        <Link href="/" locale="en">
          In english
        </Link>{" "}
        |{" "}
        <Link href="/" locale="aze">
          In Finnish
        </Link>
        <br />
        <br />
      </div>
      <div>
        <p>{t("title")}</p>
      </div>
    </>
  );
}
