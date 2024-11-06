import React, { useState } from "react";
import "../Css/DashboardLeaderBoards.css";

const DashboardLeaderBoards = () => {
  const [isActive, setIsActive] = useState("leaderboards");
  return (
    <div className="overview-leaderboard-container">
      <div className="overview-leaderboard-button-group">
        <label
          htmlFor="leaderboards"
          className="leaderboard-btn"
          onClick={() => setIsActive("leaderboards")}
        >
          LeaderBoards
        </label>
        <input type="radio" name="overview-rankings" id="leaderboards" />
        <label
          className="medals-btn"
          htmlFor="medals"
          onClick={() => setIsActive("medals")}
        >
          Medals
        </label>
        <input type="radio" name="overview-rankings" id="medals" />
        <p className="slider"></p>
      </div>

      <div className="dashboard-overview-leaderboard-text">
        {isActive === "leaderboards" && (
          <>
            <p>Congratulations!!!</p>
            <p>
              You are in top 30 in the weekly rankings and top 7 in the monthly
              rankings.
            </p>
          </>
        )}
        {isActive === "medals" && <p>You have not earned any medals yet. </p>}
      </div>
    </div>
  );
};

export default DashboardLeaderBoards;
