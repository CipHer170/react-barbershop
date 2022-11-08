import React from "react";
import heroImage from "../../img/hero/hero_image.png";
import "./Hero.scss";

function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${heroImage})`, zIndex: 0 }}
      className="hero__container"
    >
      <div className="hero__top">
        <div className="hero__left">
          <h1>Men’s Barbershop in The Middle East</h1>
        </div>
        <div className="hero__right">
          <h4> THE HIGHEST RATED</h4>
          <h6>
            Text that is placed at the bottom of the heading to reveal details
          </h6>
        </div>
      </div>
      <div className="hero__bottom">
        <button className="hero__btn">Book now</button>
      </div>
    </div>
  );
}

export default Hero;
