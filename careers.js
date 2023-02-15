import DitchTheOffice from "./Components/Careers/DitchTheOffice";
import Positions from "./Components/Careers/Positions";
import ReadAll from "./Components/Careers/ReadAll";
import Review from "./Components/Careers/Review";
import Section1 from "./Components/Careers/Section1";
import Section2 from "./Components/Careers/Section2";
import Team from "./Components/Careers/Team";
import TeamCulture from "./Components/Careers/TeamCulture";
import TeamTogether from "./Components/Careers/TeamTogether";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function careers() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <TeamTogether />
      <TeamCulture />
      <DitchTheOffice />
      <Review />
      <Team />
      <Positions />
      <ReadAll />
      <Footer />
    </>
  )
}
