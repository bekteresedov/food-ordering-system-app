import Header from "../components/layout/header";
import LangSwitch from "../components/lang";
import CampaignList from "../components/campaign/campaignList";
import MenuList from "../components/menu/menuList";
export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Header />
      <div className="mt-10 h-[20000px]">
        <CampaignList />
        <MenuList />
      </div>
      {/* <LangSwitch /> */}
      {/* <div>
        <Localization />
      </div> */}
      <div>
        {/* <p>{t("title")}</p>
        <p>{t("Home")}</p> */}
      </div>
    </>
  );
}
