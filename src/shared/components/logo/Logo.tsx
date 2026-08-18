import React from "react";
import logo from "../../../assets/IconOnly_Transparent_NoBuffer.png";

const Logo = () => {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="logo-icon" className="logo-icon" />
    </a>
  );
};

export default Logo;
