import React from "react";
import Sidebar from "../Components/DashboardSidebar.jsx";
import DashboardOverview from "../Components/DashboardOverview.jsx";

import "../Css/Dashboard.css";
import "../Css/DashboardSidebar.css";
import "../Css/DashboardCard.css";
import "../Css/DashboardGoals.css";
import "../Css/DashboardTransactionHistory.css";

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <DashboardOverview />
    </div>
  );
}

export default App;
