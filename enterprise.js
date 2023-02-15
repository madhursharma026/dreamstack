import BeliefInAction from "./Components/consulting/BeliefInAction";
import Benefits from "./Components/consulting/Benefits";
import Insights from "./Components/consulting/Insights";
import OurApproach from "./Components/consulting/OurApproach";
import TalkToExpert from "./Components/DataAndAnalytics/TalkToExpert";
import Capabilities from "./Components/enterprise/capabilities";
import Partner from "./Components/enterprise/Partner";
import Quotes from "./Components/enterprise/Quotes";
import Section1 from "./Components/enterprise/Section1";
import Section2 from "./Components/enterprise/Section2";
import Solutions from "./Components/enterprise/Solutions";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function enterprise() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Quotes />
      <Partner />
      <Capabilities />
      <Solutions />
      <BeliefInAction />
      <Benefits />
      <BeliefInAction />
      <OurApproach />
      <Insights />
      <TalkToExpert />
      <Footer />
    </>
  )
}
