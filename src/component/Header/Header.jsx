import React from "react";
// inportant note js file er extension na dile proble hobe na
// but other file er extension lagbe

import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <nav>
          <a href="" src="1">
            Order
          </a>
          <a href="" src="2">
            Order Review
          </a>
          <a href="" src="3">
            Manage Inventory
          </a>
          <a href="" src="3">
            Login
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
