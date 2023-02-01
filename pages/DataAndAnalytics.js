import BeliefInAction from "./Components/DataAndAnalytics/BeliefInAction";
import Benefits from "./Components/DataAndAnalytics/Benefits";
import Insights from "./Components/DataAndAnalytics/Insights";
import News from "./Components/DataAndAnalytics/News";
import OurApproach from "./Components/DataAndAnalytics/OurApproach";
import Quotes from "./Components/DataAndAnalytics/Quotes";
import Section1 from "./Components/DataAndAnalytics/Section1";
import Section2 from "./Components/DataAndAnalytics/Section2";
import Solutions from "./Components/DataAndAnalytics/Solutions";
import TalkToExpert from "./Components/DataAndAnalytics/TalkToExpert";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function DataAndAnalytics() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <OurApproach />
      <News />
      <Solutions />
      <BeliefInAction />
      <Benefits />
      <Insights />
      <Quotes />
      <TalkToExpert />
      <Footer />
    </>
  )
}
