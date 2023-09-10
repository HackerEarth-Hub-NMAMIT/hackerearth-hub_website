import React from "react";
import "./EventCard.css";
const EventCard = ({ card }) => {
  return (
    <div className="flexColStart r-card">
      <img src={card.image} alt="Event" />

      <span className="secondaryText r-time">
        <span style={{ color: "orange" }}>Timings : </span>
        <span>{card.time}</span>
      </span>

      <span className="primaryText">{card.name}</span>
      <span className="secondaryText">{card.detail}</span>
    </div>
  );
};

export default EventCard;
