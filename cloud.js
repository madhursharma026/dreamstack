import Capabilities from "./Components/cloud/capabilities";
import Quotes from "./Components/cloud/Quotes";
import Section1 from "./Components/cloud/Section1";
import Section2 from "./Components/cloud/Section2";
import BeliefInAction from "./Components/consulting/BeliefInAction";
import Benefits from "./Components/consulting/Benefits";
import Insights from "./Components/consulting/Insights";
import OurApproach from "./Components/consulting/OurApproach";
import News from "./Components/DataAndAnalytics/News";
import TalkToExpert from "./Components/DataAndAnalytics/TalkToExpert";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function cloud() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <OurApproach />
      <Capabilities />
      <Insights />
      <Benefits />
      <BeliefInAction />
      <News />
      <Quotes />
      <TalkToExpert />
      <Footer />
    </>
  )
}
