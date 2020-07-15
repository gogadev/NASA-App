import React from "react";

import headerImg from "../../assets/img.png";

import "./header.style.css";

const Header = () => {
  return (
    <header>
      <img className="header-img" src={headerImg} alt="" />
    </header>
  );
};

export default Header;
