import React from "react";
import q1 from "../assets/qZone1.png";
import q2 from "../assets/qZone2.png";
import q3 from "../assets/qZone3.png";

const GZone = () => {
  return (
    <div className="bg-secondary p-2 text-center">
      <h4>Q-Zone</h4>
      <img src={q1} alt="" />
      <img src={q2} alt="" />
      <img src={q3} alt="" />
    </div>
  );
};

export default GZone;
