import React from "react";
import "../Css/DashboardTickets.css";

const DashboardTickets = () => {
  return (
    <div className="dashboard-overview-tickets-container">
      <h5 className="dashboard-overview-tickets-heading">Your Tickets </h5>
      <div className="tickets-inner-container">
        <div className="id-status-flex">
          <p className="status">Status: Resolved</p>
          <p className="ticket-id">Ticket Id: 354646</p>
        </div>
        {/* <p className="subject">Subject: Unable to make payment.</p> */}
        <p>
          Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sit reprehenderit ex optio commodi fugiat laboriosam id nulla,
        </p>
      </div>
    </div>
  );
};

export default DashboardTickets;
