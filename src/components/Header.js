import "./Header.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div>
      {/* Header */}
      <div>
        <Link to="/">
          <img
            src="https://www.carlogos.org/tire-brands-logos/JK-Tyre-logo-2700x700.png"
            className="header__image"
            alt=""
          />
        </Link>
      </div>
      <div className="Header">
        <h5>WELCOME TO JK TYRES DESIGN TEMPLATES </h5>
        <div>
          <img
            src="https://www.jkorg.in/images/Raghupati-Singhania-Center-of-Excellence11.jpg"
            className="header__image"
            alt=""
          />
        </div>
      </div>
      <div className="button_box">
        <Link to="/form">
          <button className="button_header">CREATE DES</button>
        </Link>
        <Link to="/availableskus">
          <button className="button_header">DISPLAY DES</button>
        </Link>
      </div>
    </div>
  );
};
