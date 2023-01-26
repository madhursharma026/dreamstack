import Footer from "./Components/Footer";
import Header from "./Components/Header";
import IntroSection from "./Components/Homepage/IntroSection";
import PartnerSection from "./Components/Homepage/PartnerSection";
import KnowledgeSection from "./Components/Homepage/KnowledgeSection";
import LoveTheWeb from "./Components/Homepage/LoveTheWeb";
import TryPocket from "./Components/Homepage/TryPocket";
import MorePowerToYou from "./Components/Homepage/MorePowerToYou";

export default function Home() {
  return (
    <>
      <Header />
      <IntroSection />
      <PartnerSection />
      <KnowledgeSection />
      <LoveTheWeb />
      <TryPocket />
      <MorePowerToYou />
      <Footer />
    </>
  )
}
