import Footer from "./Components/Footer";
import Header from "./Components/Header";
import IntroSection from "./Components/Homepage/IntroSection";
import PartnerSection from "./Components/Homepage/PartnerSection";
import KnowledgeSection from "./Components/Homepage/KnowledgeSection";

export default function Home() {
  return (
    <>
      <Header />
      <IntroSection />
      <PartnerSection />
      <KnowledgeSection />
      <Footer />
    </>
  )
}
