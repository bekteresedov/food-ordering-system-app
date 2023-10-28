import Header from "../components/layout/header";
import LangSwitch from "../components/lang";
import CampaignList from "../components/campaign/campaignList";
import MenuList from "../components/menu/menuList";
import Carousel from "../components/carousel";
import CarouselComponent from "../components/carousel";
import Coursel from "../components/carousel";
export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Header />
      <Coursel />
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
