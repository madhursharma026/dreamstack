import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TryPocket from "./Components/Homepage/TryPocket";
import LoveTheWeb from "./Components/Homepage/LoveTheWeb";
import IntroSection from "./Components/Homepage/IntroSection";
import Productivity from "./Components/Homepage/productivity";
import PartnerWithUs from "./Components/Homepage/PartnerWithUs";
import PartnerSection from "./Components/Homepage/PartnerSection";
import MorePowerToYou from "./Components/Homepage/MorePowerToYou";
import CustomersSlider from "./Components/Homepage/CustomersSlider";
import KnowledgeSection from "./Components/Homepage/KnowledgeSection";

export default function Home() {
  return (
    <>
      <Header />
      <MorePowerToYou />
      <CustomersSlider />
      <Productivity />
      <KnowledgeSection />
      <PartnerWithUs />
      {/* <PartnerSection /> */}
      <LoveTheWeb />
      {/* <IntroSection />
      <TryPocket /> */}
      <Footer />
    </>
  )
}
