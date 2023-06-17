import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="navbar">
      <div className="logoContainer">
        <img src="" alt="" />
        <Link className="logoname" to={"/"}>
          <h3>
            <span className="spancolorr">likith </span>Mercado
          </h3>
        </Link>
      </div>
      <div className="linkContainer">
        <Link className="navlink" to={"/"}>
          Home
        </Link>
        <Link className="navlink" to={"/services"}>
          Services
        </Link>
        <Link className="navlink" to={"/about"}>
          About Us
        </Link>
        <Link className="navlink" to={"/contact"}>
          Contact
        </Link>
      </div>
      <div onClick={() => setShow(!show)} className="menuIcon">
        <MenuIcon fontSize="large" className="menuIcon" />
      </div>
      {show ? (
        <div className="r-nav">
          <div className="r-items">
            <Link to="/" className="r-links">
              <h3>Home</h3>
            </Link>
            <Divider />
            <Link to="/services" className="r-links">
              <h3>Services</h3>
            </Link>
            <Divider />
            <Link to="/about" className="r-links">
              <h3>About Us</h3>
            </Link>
            <Divider />
            <Link to="/contact" className="r-links">
              <h3>Contact</h3>
            </Link>
            <Divider />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
