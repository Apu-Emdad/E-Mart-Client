import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
import "../../Assets/CSS/Dashboard-CSS/Dashboard.css";
import Sidebar from "../../Components/Dashboard-Components/Sidebar";
import Topbar from "../../Components/Dashboard-Components/Topbar";
import UserSidebar from "../../Components/Dashboard-Components/UserSidebar";
import DashboardHome from "./Dashboard-Pages/DashboardHome";

const Dashboard = ({ children }) => {
  const isAdmin = useSelector((state) => state.user.currentUser.isAdmin);

  return (
    <div>
      <Topbar />
      <div className="dashboard-container">
        {isAdmin ? <Sidebar /> : <UserSidebar />}

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
