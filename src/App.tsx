import Navbar from "./components/Navbar";
import AboutPage from "./pages/About/AboutPage";
import HomePage from "./pages/Home/HomePage";
import CompanyLogo from "./pages/CompanyLogo/CompanyLogo";
import SectionTitle from "./components/SectionTitle";

const App = () => {
  return (
    <div className="font-montserrat">
      <Navbar />
      <HomePage />
      <CompanyLogo />
      <SectionTitle
        title="Services"
        desc="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <AboutPage />
    </div>
  );
};

export default App;
