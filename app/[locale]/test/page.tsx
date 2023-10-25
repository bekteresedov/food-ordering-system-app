import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations("Index");

  return <div>{t("Home")}</div>;
};

export default Page;
