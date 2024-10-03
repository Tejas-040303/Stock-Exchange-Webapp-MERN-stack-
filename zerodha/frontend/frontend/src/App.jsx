import { useState } from "react";
import "./App.css";
import HomePage from "./landingPage/home/HomePage";
import Signup from "./landingPage/signup/Signup";
import AboutPage from "./landingPage/about/AboutPage";
import ProductPage from "./landingPage/products/ProductPage";
import PricingPage from "./landingPage/pricing/PricingPage";
import SupportPage from "./landingPage/support/SupportPage";
import NotFound from './landingPage/NotFound'
import Navbar from "./landingPage/Navbar";
import Footer from "./landingPage/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
