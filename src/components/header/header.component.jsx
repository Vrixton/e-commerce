import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.style.scss";

const Header = () => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        shop
        <span className="hover-line"></span>
      </Link>
      <Link className="option" to="/contact">
        contact
        <span className="hover-line"></span>
      </Link>
    </div>
  </div>
);
export default Header;
