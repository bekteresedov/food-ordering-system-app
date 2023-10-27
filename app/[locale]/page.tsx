import Header from "../components/layout/header";
import LangSwitch from "../components/lang";
import CampaignList from "../components/campaign/campaignList";
export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Header />
      <div className="mt-10">
        <CampaignList />
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
