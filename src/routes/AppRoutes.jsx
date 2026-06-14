import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import About from "../pages/About";

import SolutionCustom from "../pages/SolutionCustom";

import Projects from "../pages/Projects";

import Pricing from "../pages/Pricing";

import Blog from "../pages/Blog";

import Contact from "../pages/Contact";

import PricingPlan from "../pages/PricingPlan";



const AppRoutes = () => {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/solution-custom" element={<SolutionCustom />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/our-pricing" element={<PricingPlan/>} />

      <Route path="/pricing" element={<Pricing />} />

      <Route path="/blog" element={<Blog />} />

      <Route path="/contact-page" element={<Contact />} />
    </Routes>

  );

};



export default AppRoutes;