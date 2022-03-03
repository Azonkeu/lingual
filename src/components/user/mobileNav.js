import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Accessibility from './accessibility';
import MenuToggle from './menuToggle';
import './mobile.css';

const MobileNavLinks = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="container-user">
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <ul className="wrapper-user">
          <li className="item-user">
            <NavLink className="link-user" activeclassname="active" to="my-profile">My Profile</NavLink>
          </li>
          <li className="item">
            <NavLink className="link-user" activeclassname="active" to="schedule">Schedule</NavLink>
          </li>
          <li className="item">
            <NavLink className="link-user" activeclassname="active" to="classes">Classes</NavLink>
          </li>
          <li className="item">
            <NavLink className="link-user" activeclassname="active" to="blog">Blog</NavLink>
          </li>
          <li className="item">
            <NavLink className="link-user" activeclassname="active" to="faq">FAQ</NavLink>
          </li>
          <div className="margin-user" />
          <Accessibility />
        </ul>
      )}
    </div>
  );
};

export default MobileNavLinks;
