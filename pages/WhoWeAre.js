import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUsCard from "./Components/WhoWeAre/AboutUsCard";
import Galance from "./Components/WhoWeAre/glance";
import Investors from "./Components/WhoWeAre/Investors";
import KnowUsBetter from "./Components/WhoWeAre/KnowUsBetter";
import WhomWeServe from "./Components/WhoWeAre/WhomWeServe";
import OurPeople from "./Components/WhoWeAre/OurPeople";
import Section2 from "./Components/WhoWeAre/Section2";
import TalkToExpert from "./Components/WhoWeAre/TalkToExpert";
import MapService from "./Components/WhoWeAre/MapService";
import Partnerships from "./Components/WhoWeAre/partnerships";
import OurPricingPolicy from "./Components/WhoWeAre/OurPricingPolicy";

export default function WhoWeAre() {
    return (
        <>
            <Header />
            <Section2 />
            <Galance />
            <OurPeople />
            <AboutUsCard />
            <KnowUsBetter />
            <WhomWeServe />
            <MapService />
            <Partnerships />
            <OurPricingPolicy />
            <Investors />
            <TalkToExpert />
            <Footer />
        </>
    )
}
