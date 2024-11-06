import React from "react";

function CardSummary() {
  return (
    <div className="payment-card-summary">
      <div className="payment-card-details">
        <h3>Bank Name</h3>
        <pre className="card-number">**** **** **** 1234</pre>
        <div className="card-holder-details">
          <div className="holder-name">
            <p className="card-details-heading">Card Holder</p>
            <p>Customer Name</p>
          </div>
          <div className="card-expiry">
            <p className="card-details-heading">Expiry Date</p>
            <p>06/21</p>
          </div>
        </div>
        {/* <button>Deactivate Card</button> */}
      </div>
      <div className="dashboard-card-border"></div>
      <div className="account-overview-dashboard">
        <h5 className="account-balance-heading">Your PDA Balance</h5>
        <div className="account-balance-container">
          <p className="account-balance">$ 2850.75</p>
          <p className="account-balance-text">Current Balance</p>
        </div>
      </div>
    </div>
  );
}

export default CardSummary;
