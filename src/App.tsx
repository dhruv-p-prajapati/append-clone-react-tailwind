import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import AppComponents from "./pages/App";
import PortfolioDetails from "./pages/Portfolio/PortfolioDetails";

const App = () => {
  return (
    <div className="font-montserrat">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<AppComponents />} />
          <Route path="/portfolio-details" element={<PortfolioDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
