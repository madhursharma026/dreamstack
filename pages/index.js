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

export default function Home() {
  return (
    <>
      <Header />
      <IntroSection />
      <CustomersSlider />
      <PartnerSection />
      <Productivity />
      <KnowledgeSection />
      <LoveTheWeb />
      <TryPocket />
      <MorePowerToYou />
      <Footer />
    </>
  )
}
