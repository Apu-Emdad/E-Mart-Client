import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "../../Assets/CSS/Dashboard-CSS/Dashboard.css";
import Sidebar from "../../Components/Dashboard-Components/Sidebar";
import Topbar from "../../Components/Dashboard-Components/Topbar";
import DashboardHome from "./Dashboard-Pages/DashboardHome";

const Dasboard = ({ children }) => {
  console.log(children);

  return (
    <div>
      <Topbar />
      <div className="dashboard-container">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dasboard;
