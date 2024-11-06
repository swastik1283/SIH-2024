import React from "react";

const CTAButton = ({ title, btn_class, children }) => {
  return (
    <button className={`btn ${btn_class}`}>{title ? title : children}</button>
  );
};

export default CTAButton;
