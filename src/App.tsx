import Navbar from "./components/Navbar";
import AboutPage from "./pages/About/AboutPage";
import HomePage from "./pages/Home/HomePage";
import CompanyLogo from "./pages/CompanyLogo/CompanyLogo";
import StatsPage from "./pages/Stats/StatsPage";
import ServicesPage from "./pages/Services/ServicesPage";
import FeaturePage from "./pages/Features/FeaturePage";
import PricingPage from "./pages/Pricing/PricingPage";
import FaqPage from "./pages/Faq/FaqPage";

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
    </div>
  );
};

export default App;
