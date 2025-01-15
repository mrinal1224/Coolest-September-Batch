import React from "react";
import "./Card.css";

const Card = ({cardData}) => {
  return (
    <div className="card">
      {cardData}
    </div>
  );
};

export default Card;