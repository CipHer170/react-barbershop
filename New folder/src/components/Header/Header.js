import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../img/header/Vector.svg";
import location from "../../img/header/Location.svg";
import phone from "../../img/header/Phone.svg";
function Header() {
  return (
    <div className="header__container dflex">
      <Link to="/" className="header__logo dflex">
        <img src={logo} alt="" />
        <h2 className="header__title">Cool barber</h2>
      </Link>
      <nav className="header__list dflex">
        <ul className=" header__list dflex">
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/masters">Masters</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/testimotials">Testimotials</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <div className="header__info dflex">
        <span className="header__info-item location dflex">
          <h3>
            302 W 50th St, <br /> NY, NY 10019
          </h3>
          <img src={location} alt="" width="30px" />
        </span>
        <span className="header__info-item number dflex">
          <h3>
            8(800)000 00 00 <br />{" "}
            <span className="number__mini">Daily from 9 to 20</span>
          </h3>
          <img src={phone} alt="" width="30px" />
        </span>
      </div>
    </div>
  );
}

export default Header;
