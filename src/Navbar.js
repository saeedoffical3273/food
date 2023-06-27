import React, { useState } from "react";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={isMobile ? "navbar mobile" : "navbar"}>
      <div className="navbar-toggle" onClick={handleMenuClick}>
        <i className="fa fa-bars"/>
      </div>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className={isMobile ? "navbar-menu mobile" : "navbar-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
