import React from 'react';
import { NavLink } from 'react-router-dom';
import './styleNav.css';

const Navbar = () => (
  <div className="container">
    <ul className="wrapper-desktop">
      <li className="item-desktop">
        <NavLink className="link-desk" activeclassname="active" to="about-us">About us</NavLink>
      </li>
      <li className="item-desktop desk">
        <NavLink className="link-desk" activeclassname="active" to="how-it-works">How it works</NavLink>
      </li>
      <li className="item-desktop">
        <NavLink className="link-desk" activeclassname="active" to="enterprise">Enterprise</NavLink>
      </li>
      <li className="item-desktop desk">
        <NavLink className="link-desk" activeclassname="active" to="become-a-tutor">Become a tutor</NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
