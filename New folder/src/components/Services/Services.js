import React from "react";
import serviceCut from "../../img/services/service_cut.svg";
import serviceClear from "../../img/services/service_clear.svg";
import serviceBeard from "../../img/services/service_beard.svg";
import "./Services.scss";

function Services() {
  return (
    <div className="service">
      <div className="service__items base-container">
        <div className="service__item">
          <img src={serviceCut} alt="" />
          <span>
            <h4>Briefly describe the benefit</h4>

            <span className="service__description">
              Long text, in two lines, for clarity and detail
            </span>
          </span>
        </div>
        <div className="service__item">
          <img src={serviceClear} alt="" />
          <span>
            <h4>Briefly describe the benefit</h4>
            <span className="service__description">
              Long text, in two lines, for clarity and detail
            </span>
          </span>
        </div>
        <div className="service__item">
          <img src={serviceBeard} alt="" />
          <span>
            <h4>Briefly describe the benefit</h4>
            <span className="service__description">
              Long text, in two lines, for clarity and detail
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Services;
