import React from "react";
import "./TopContent.css";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react"; 
import topImage from "../assets/images/top.jpg";
import Header from './Header.js'
import { Link } from "react-router-dom";

const TopContent = () => {
    const [show, setShow] = useState(false);
  return (
    <div className="topInformation">
      <Header/>
      <div className="infoText">
        <h1 className="title1">Welcome</h1>
        <p className="caption">
          “Revitalize your ride with our professional garage services,where excellence meets your automotive needs”
        </p>
        <p className="description"></p>
      </div>
      <Link to={'/Blogs'}>
      <div className="topbutton">
        <h2>ㅤㅤㅤBlogs</h2>
        < ArrowForwardIcon className="arrow"/>
      </div>
      </Link>
    </div>

  );
};

export default TopContent;
