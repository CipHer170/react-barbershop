import React from "react";
import MasterCard from "./MasterCard";
import "./TEstimotials.scss";
import { Carousel } from "@trendyol-js/react-carousel";

export default function Testimotials() {
  return (
    <div className="testimotials">
      <div className="testimotials__title">
        <h2>Testimonials</h2>
        <span>
          Подзаголовок, который раскрывает подробности заголовка и призывает
          сделать целевое действие
        </span>
      </div>
      <MasterCard />
    </div>
  );
}
