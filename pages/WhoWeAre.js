import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUsCard from "./Components/WhoWeAre/AboutUsCard";
import Galance from "./Components/WhoWeAre/glance";
import Investors from "./Components/WhoWeAre/Investors";
import KnowUsBetter from "./Components/WhoWeAre/KnowUsBetter";
import OurHistory from "./Components/WhoWeAre/OurHistory";
import OurPeople from "./Components/WhoWeAre/OurPeople";
import Section2 from "./Components/WhoWeAre/Section2";
import TalkToExpert from "./Components/WhoWeAre/TalkToExpert";

export default function WhoWeAre() {
    return (
        <>
            <Header />
            <Section2 />
            <Galance />
            <OurPeople />
            <AboutUsCard />
            <KnowUsBetter />
            <OurHistory />
            <Investors />
            <TalkToExpert />
            <Footer />
        </>
    )
}
