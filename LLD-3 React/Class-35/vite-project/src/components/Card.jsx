import React from "react";
import "./Card.css";

const Card = ({cardTitle , cardDescription}) => {
  return (
    <div className="card">
      <div className="card-title">{cardTitle}</div>
      <div className="card-description">{cardDescription}</div>
    </div>
  );
};

export default Card;