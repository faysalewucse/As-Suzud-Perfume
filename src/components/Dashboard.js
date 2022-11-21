import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@mui/material";
import MetaData from "./MetaData.js";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{totalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>5</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>2</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>1</p>
            </Link>
          </div>
        </div>

        {/* <div className="lineChart">
            <Line data={lineState} />
          </div>

          <div className="doughnutChart">
            <Doughnut data={doughnutState} />
          </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
