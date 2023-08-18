import React from "react";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import "../../Assets/CSS/Dashboard-CSS/Topbar.css";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/home" className="logo">
            <span>E-Mart</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://i.ibb.co/sRr8kWj/avatar.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
