import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import AppComponents from "./pages/App";
import PortfolioDetails from "./pages/Portfolio/PortfolioDetails";
import ServiceDetail from "./pages/Services/ServiceDetail";

const App = () => {
  return (
    <div className="font-montserrat">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<AppComponents />} />
          <Route path="/portfolio-details" element={<PortfolioDetails />} />
          <Route path="/service-details" element={<ServiceDetail />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
