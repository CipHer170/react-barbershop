import axios from "axios";
import React from "react";
import { useEffect } from "react";
import data from "./mastersData";
import "./Masters.scss";

function MasterCard() {
  return (
    <div className="masters">
      {data.map(({ id, masterPhoto, masterName, masterDescription }) => {
        console.log(masterPhoto);
        return (
          <div className="masters__card" key={id}>
            <div className="masters__top">
              <img src={masterPhoto} alt="master__image" />
              <h3 className="masters__name"> {masterName}</h3>
              <span className="masters__desc">{masterDescription}</span>
            </div>
            <div className="masters__bottom">
              <a href="google.com" className="masters__link">
                Read full testimonial
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MasterCard;
