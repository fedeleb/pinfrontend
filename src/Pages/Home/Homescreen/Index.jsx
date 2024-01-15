import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Footer from "../Footer";


export default function Home(){
    return (
        <>
            <HeroSection />
            <MySkills />
            <MyPortfolio />
            <AboutMe />
            <ContactMe />
            <Footer />
        </>
    );
}