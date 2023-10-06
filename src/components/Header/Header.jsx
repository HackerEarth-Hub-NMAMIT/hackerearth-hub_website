import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link,NavLink } from "react-router-dom";
import {motion} from "framer-motion";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="./logo.png" alt="Logo" width={150} />
        </Link>
        

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Events">Events</NavLink>
            <NavLink to="/OurTeam">Our Team</NavLink>
            <button className="button">
              <a href="https://www.hackerearth.com/challenges/new/competitive/hackerearth-select/?utm_source=HECA&utm_medium=HECAP14634&utm_campaign=he-select">Event Registration</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
