import React from "react";
import { Link } from "react-router-dom";
import About from "../About/About";
import BaseContainer from "../BaseContainer/BaseContainer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
// import Masters from "../Masters/Masters";
// import Portfolio from "../Portfolio/Portfolio";
// import Testimotials from "../Testimotials/Testimotials";
// import Contacts from "../Contacts/Contacts";
import "./Home.scss";

function Home() {
  return (
    <main className="home__main">
      <BaseContainer>
        <Header />
        <Hero />
      </BaseContainer>

      {/* <About />
      <Testimotials />
      <Masters />
      <Contacts /> */}
    </main>
  );
}

export default Home;
