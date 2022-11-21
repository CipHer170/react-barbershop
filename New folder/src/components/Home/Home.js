import React from "react";
import BaseContainer from "../BaseContainer/BaseContainer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import About from "../About/About";
// import Masters from "../Masters/Masters";
// import Portfolio from "../Portfolio/Portfolio";
// import Testimotials from "../Testimotials/Testimotials";
// import Contacts from "../Contacts/Contacts";
import "./Home.scss";
import Testimotials from "../Testimotials/Testimotials";

function Home() {
  return (
    <main className="home__main">
      <BaseContainer>
        <Header />
        <Hero />
      </BaseContainer>
      <Services />
      <BaseContainer>
        <About />
        <Testimotials />
      </BaseContainer>

      {/* <About />
      <Testimotials />
      <Masters />
      <Contacts /> */}
    </main>
  );
}

export default Home;
