import React from "react";
import logo from "../../assets/img/logo.svg";
import Banquet from "../../assets/img/Banquet.svg";
import "./style.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo-line" className="logo-line" />
      <img src={Banquet} alt="logo-line" className="logo-line" />
    </div>
  );
};

export default Logo;
