import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="container-user">
    <ul className="wrapper-desktop-user">
      <li className="item-desktop-user">
        <NavLink className="link-desk-user" activeclassname="active-user" to="my-profile">My Profile</NavLink>
      </li>
      <li className="item-desktop-user">
        <NavLink className="link-desk" activeclassname="active-user" to="schedule">Schedule</NavLink>
      </li>
      <li className="item-desktop-user">
        <NavLink className="link-desk-user" activeclassname="active-user" to="classes">Classes</NavLink>
      </li>
      <li className="item-desktop-user desk-user">
        <NavLink className="link-desk-user" activeclassname="active-user" to="blog">Blog</NavLink>
      </li>
      <li className="item-desktop-user desk-user">
        <NavLink className="link-desk-user" activeclassname="active-user" to="faq">fAQ</NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
