import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import {motion} from 'framer-motion';
const hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side*/}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1
            initial={{y:"2rem", opacity:0}}
            animate={{y:0, opacity:1}}
            transition = {{
              duration: 2,
              type: "spring"
            }}
            >
              A Coding Hub
              <br />
              of NMAMIT
              <br />
              Nitte.
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Our club Hackerearth Hub-Nmamit enlightens and inspires all our
              <br />
              fellow club-mates about Competitive Programming and its positives
              <br />
              in the coming future.
              <br />
            </span>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              With due support of Hackerearth India, we host several weekly as
              <br />
              well as monthly contests and hence keep up with a healthy
              <br />
              competitive environment when it comes to 'CP'.
              <br />
            </span>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={20} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Core Members</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={120} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Club Members</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={5} />
                <span>+</span>
              </span>
              <span className="secondaryText">Events</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
          initial={{x:"7rem", opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{
            duration:2,
            type: "spring"
          }} 
          className="image-container">
            <img src="./hero-image.jpeg" alt="Computer" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default hero;
