import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/*Left Side*/}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="HackerEarth" width={120} />
          <span className="secondaryText">
            We are a Tech Club which is at
            service to strengthen your Coding
            <br />
            Skills and hence a medium to take
            leap into the field of Competitive
            <br /> Programming.
          </span>
        </div>
        {/*Right Side*/}
        <div className="flexColStart f-right">
          <span className="primaryText">Contact Us</span>
          <span>
            NMAMIT Nitte, Karkala Taluk,
            <br /> Udupi Dist, Karnataka-574110
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
