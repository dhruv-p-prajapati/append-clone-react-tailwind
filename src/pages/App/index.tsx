import Navbar from "../../components/Navbar";
import AboutPage from "../About/AboutPage";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import ContactUsPage from "../ContactUs/ContactUsPage";
import CtaPage from "../Cta/CtaPage";
import FaqPage from "../Faq/FaqPage";
import FeaturePage from "../Features/FeaturePage";
import HomePage from "../Home/HomePage";
import PortfolioPage from "../Portfolio/PortfolioPage";
import PricingPage from "../Pricing/PricingPage";
import ServicesPage from "../Services/ServicesPage";
import StatsPage from "../Stats/StatsPage";
import TeamPage from "../Team/TeamPage";
import TestimonialsPage from "../Testimonials/TestimonialsPage";

const AppComponents = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <CompanyLogo />
      <AboutPage />
      <StatsPage />
      <ServicesPage />
      <FeaturePage />
      <PortfolioPage />
      <PricingPage />
      <FaqPage />
      <TeamPage />
      <CtaPage />
      <TestimonialsPage />
      <ContactUsPage />
    </>
  );
};

export default AppComponents;