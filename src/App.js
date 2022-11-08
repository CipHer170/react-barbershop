import React from "react";
import { Routes, Route } from "react-router-dom";
// import components
import Header from "./components/Header/Header";
import BaseContainer from "./components/BaseContainer/BaseContainer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Masters from "./components/Masters/Masters";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimotials from "./components/Testimotials/Testimotials";

const App = () => {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/masters" element={<Masters />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/testimotials" element={<Testimotials />} />
      </Routes>
  );
};

export default App;
