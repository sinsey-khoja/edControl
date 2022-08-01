import React from "react";
import "./Stats.scss";
const Stats = ({ name, colorBg, num, icon }) => {
  const boxStyle = {
    backgroundColor: colorBg,
  };
  return (
    <div className="total-stats__box">
      <div className="total-stats__box_icon" style={boxStyle}>
        <span>{icon}</span>
      </div>
      <div className="total-stats__box_text">
        <h3>{num}</h3>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Stats;
