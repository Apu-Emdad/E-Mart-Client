import React from "react";
import "../../../Assets/CSS/Dashboard-CSS/DashboardHome.css";
import Chart from "../../../Components/Dashboard-Components/Chart";
import FeaturedInfo from "../../../Components/Dashboard-Components/FeaturedInfo";
import WidgetLg from "../../../Components/Dashboard-Components/WidgetLg";
import WidgetSm from "../../../Components/Dashboard-Components/WidgetSm";
import { userData } from "../dummyData";

const DashboardHome = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default DashboardHome;
