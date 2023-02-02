import Footer from "./Components/Footer";
import Header from "./Components/Header";
import IntroSection from "./Components/Homepage/IntroSection";
import PartnerSection from "./Components/Homepage/PartnerSection";
import KnowledgeSection from "./Components/Homepage/KnowledgeSection";
import LoveTheWeb from "./Components/Homepage/LoveTheWeb";
import TryPocket from "./Components/Homepage/TryPocket";
import MorePowerToYou from "./Components/Homepage/MorePowerToYou";
import CustomersSlider from "./Components/Homepage/CustomersSlider";
import Productivity from "./Components/Homepage/productivity";
import PartnerWithUs from "./Components/Homepage/PartnerWithUs";

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
