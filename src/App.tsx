import Navbar from "./components/Navbar";
import AboutPage from "./pages/About/AboutPage";
import HomePage from "./pages/Home/HomePage";
import CompanyLogo from "./pages/CompanyLogo/CompanyLogo";
import StatsPage from "./pages/Stats/StatsPage";
import ServicesPage from "./pages/Services/ServicesPage";
import FeaturePage from "./pages/Features/FeaturePage";
import PricingPage from "./pages/Pricing/PricingPage";
import FaqPage from "./pages/Faq/FaqPage";
import TeamPage from "./pages/Team/TeamPage";
import CtaPage from "./pages/Cta/CtaPage";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
import TestimonialsPage from "./pages/Testimonials/TestimonialsPage";

const App = () => {
  return (
    <div className="font-montserrat">
      <Navbar />
      <HomePage />
      <CompanyLogo />
      <AboutPage />
      <StatsPage />
      <ServicesPage />
      <FeaturePage />
      <PricingPage />
      <FaqPage />
      <TeamPage />
      <CtaPage />
      <TestimonialsPage />
      <ContactUsPage />
    </div>
  );
};

export default App;
