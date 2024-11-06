import React from "react";
import { FaCircleUser } from "react-icons/fa6";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <FaCircleUser className="dashboard-logo-pic" />
        <h2>Username Surname</h2>
        <p>UID:123456789</p>
      </div>

      <ul>
        <li>Overview</li>
        <li>Transactions</li>
        <li>Cards</li>
        <li>Invoices</li>
        <li>Goals</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
