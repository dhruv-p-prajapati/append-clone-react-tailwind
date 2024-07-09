import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import AppComponents from "./pages/App";
import PortfolioDetails from "./pages/Portfolio/PortfolioDetails";
import ServiceDetail from "./pages/Services/ServiceDetail";
import BlogDetails from "./pages/Blog/BlogDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      offset: 120, // offset (in px) from the original trigger point
      duration: 600, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="font-montserrat">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<AppComponents />} />
          <Route path="/portfolio-details" element={<PortfolioDetails />} />
          <Route path="/service-details" element={<ServiceDetail />} />
          <Route path="/blog-details" element={<BlogDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
