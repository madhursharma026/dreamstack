import Section2 from "./Components/cybersecurity/Section2";
import OurApproach from "./Components/cybersecurity/OurApproach";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Services from "./Components/cybersecurity/Services";
import Insights from "./Components/cybersecurity/Insights";
import Benefits from "./Components/cybersecurity/Benefits";
import Insights2 from "./Components/cybersecurity/Insights2";
import Quotes from "./Components/cybersecurity/Quotes";
import InFocus from "./Components/cybersecurity/InFocus";
import TalkToExpert from "./Components/cybersecurity/TalkToExpert";
import Section1 from "./Components/cybersecurity/Section1";

export default function cybersecurity() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <OurApproach />
      <Services />
      <Insights />
      <Benefits />
      <Insights2 />
      <Quotes />
      <InFocus />
      <TalkToExpert />
      <Footer />
    </>
  )
}
