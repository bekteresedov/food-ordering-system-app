import Header from "../components/layout/header";
import LangSwitch from "../components/lang";
import CampaignList from "../components/campaign/campaignList";
import MenuList from "../components/menu/menuList";
import Carousel from "../components/carousel";
import CarouselComponent from "../components/carousel";
import Coursel from "../components/carousel";
import About from "../components/about";
import Reservation from "../components/reservation";
import CustomerList from "../components/customer/customerList";
import Footer from "../components/layout/footer";
export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Header />
      <Coursel />
      <div className="mt-10 ">
        <CampaignList />
        <MenuList />
        <About />
        <Reservation />
        <CustomerList />
      </div>
      <Footer />
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
