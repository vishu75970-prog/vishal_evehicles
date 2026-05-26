import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Spirit from "./model/Spirit";
import Spiritplus from "./model/Spiritplus";
import Spiritpro from "./model/Spiritpro";
import Ampra from "./model/Ampra";
import Drifty from "./model/Drifty";
import Styler from "./model/Styler";
import Venice from "./model/Venice";


function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/Spirit" element={<Spirit />} />

        <Route path="/Spiritplus" element={<Spiritplus />} />

        <Route path="/Spiritpro" element={<Spiritpro />} />

        <Route path="/Ampra" element={<Ampra />} />

        <Route path="/Drifty" element={<Drifty />} />

        <Route path="/Styler" element={<Styler />} />

        <Route path="/Venice" element={<Venice />} />
        

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;