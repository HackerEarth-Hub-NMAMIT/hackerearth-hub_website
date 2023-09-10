import React from "react";
import "./Eventlist.css";
import data from "../../utils/slider.json";
import EventCard from "../../components/EventCard/EventCard";
const Eventlist = () => {
  return (
    <div className="Events-Container">
      <div className="r-h flexColStart">
          <span className="orangeText szs">Upcomming</span>
          <span className="primaryText szl">Events</span>
        </div>
      <div className="card-table">
      {data.map((card, i) => (
        <div className="card-cell" key={i}>
          <EventCard card={card} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Eventlist;
