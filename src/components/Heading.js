import React from "react";
import "../styles/Heading.css";

const Heading = ({ text }) => {
  return (
    <div className="heading">
      <div className="line"></div>
      <p>{text}</p>
      <div className="line"></div>
    </div>
  );
};

export default Heading;
