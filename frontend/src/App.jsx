import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingLayout from "./landing_page/LandingLayout";
import Dashboard from "./components/Dashboard";

import HomePage from "./landing_page/home/HomePages";
import About from "./landing_page/about/About";
import PricingPage from "./landing_page/pricing/PricingPage";
import Products from "./landing_page/products/Products";
import Signup from "./landing_page/Signup";
import Login from "./landing_page/Login";
import Support from "./landing_page/support/Support";
import NotFound from "./landing_page/NotFound";

function App() {
  return (
    <Routes>

      {/* Public pages */}
      <Route element={<LandingLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Dashboard (NO Navbar/Footer) */}
      <Route path="/dashboard/*" element={<Dashboard />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;
