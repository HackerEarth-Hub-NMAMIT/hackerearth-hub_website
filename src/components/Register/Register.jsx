import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <section className="gwrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Register Now</span>
          <span className="secondaryText">
            Be a part of HackerEarth Hub Nmamit and become a better programmer
          </span>
          <button className="register-button">
            <a href="https://forms.gle/BFuqwtKyqnyVSbNY8">Register Now</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
