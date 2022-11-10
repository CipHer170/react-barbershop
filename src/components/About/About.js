import React from "react";
import workingProcess1 from "../../img/about/working_process_1.svg";
import workingProcess2 from "../../img/about/working_process_2.svg";
import workingProcess3 from "../../img/about/working_process_3.svg";
import workingProcess4 from "../../img/about/working_process_4.svg";
import workingProcess5 from "../../img/about/working_process_5.svg";
import workingProcess6 from "../../img/about/working_process_6.svg";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <div className="about__title">
        <h2>About Us</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
          explicabo! Cupiditate distinctio, sint quibusdam voluptatibus id illum
          illo velit eius
        </span>
      </div>
      <div className="about__items">
        <img src={workingProcess1} alt="" className="big" />
        dsdsd <img src={workingProcess5} alt="" className="small" />
        <img src={workingProcess6} alt="" className="big" />
      </div>
      <div className="about__buttons">
        <a href="/masters">Our masters and their masterpieces</a>
        <a href="instagram.com">Our Instagram</a>
      </div>
    </div>
  );
}

export default About;
