import React from "react";
import Home from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./page/About";
import Services from "./page/Services";
import Features from "./page/Features";
import Blogs from "./page/Blogs";
import Testi from "./page/Testi";
import Contact from "./page/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/features" element={<Features />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/testimonial" element={<Testi />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
