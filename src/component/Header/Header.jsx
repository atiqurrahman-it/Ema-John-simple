import React from "react";
// inportant note js file er extension na dile proble hobe na
// but other file er extension lagbe

import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <div>
        <img  src={logo} alt="" />
      </div>
      <div>
        <nav>
          <Link to="/" src="1">Shop </Link>
          <Link to="/order" src="1"> Order </Link>
          <Link to="" src="2"> Order Review </Link>
          <Link to="inventory" src="3"> Manage Inventory </Link>
          <Link to="/login" src="3"> Login  </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
