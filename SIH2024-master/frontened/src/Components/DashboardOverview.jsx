import React from "react";
import CardSummary from "../Components/DashboardCard.jsx";
import Goals from "../Components/DashboardGoals.jsx";
import TransactionHistory from "../Components/DashboardTransactionHistory.jsx";
import "../Css/DashboardOverview.css";
import DashboardLeaderBoards from "./DashboardLeaderBoards.jsx";
import DashboardTickets from "./DashboardTickets.jsx";

const DashboardOverview = () => {
  return (
    <div className="main-content">
      <CardSummary />

      <TransactionHistory />
      <Goals />
      <DashboardLeaderBoards />
      <DashboardTickets />
      {/* <OutcomeStatistics /> */}

      {/* <NewTransaction /> */}
    </div>
  );
};

export default DashboardOverview;
