import AboutUsDetails from "../components/AboutUsDetails/page";
import ContactSection from "../components/ContactSection/page";
import CourseShowcase from "../components/CourseShowcase/page";
import CursorTracker from "../components/CursorTracker/page";
import FAQSection from "../components/FAQSection/page";
import Header from "../components/Header/page";
import NGSServices from "../components/NGSServices/page";
import RDExpertise from "../components/RDExpertise/page";
import ReviewSection from "../components/ReviewSection/page";
import ServiceSlider from "../components/ServicesSlider/page";
import StatSection from "../components/StatSection/page";
import TeamSection from "../components/TeamSection/page";


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <CursorTracker />
      <Header/>
      <AboutUsDetails />
      <ServiceSlider />
      <RDExpertise />
      <NGSServices />
      {/* <CourseShowcase /> */}
      {/* <StatSection /> */}
      <ContactSection />
      <ReviewSection />
      {/* <TeamSection /> */}
      <FAQSection />
    </div>
  );
}
