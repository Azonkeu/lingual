import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Accessibility from './accessibility';
import MenuToggle from './menuToggle';
import './mobile.css';

const MobileNavLinks = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="container">
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <ul className="wrapper">
          <li className="item">
            <NavLink className="link" activeclassname="active" to="about-us">About us</NavLink>
          </li>
          <li className="item">
            <NavLink className="link" activeclassname="active" to="how-it-works">How it works</NavLink>
          </li>
          <li className="item">
            <NavLink className="link" activeclassname="active" to="enterprise">Enterprise</NavLink>
          </li>
          <li className="item">
            <NavLink className="link" activeclassname="active" to="become-a-tutor">Become a tutor</NavLink>
          </li>
          <div className="margin" />
          <Accessibility />
        </ul>
      )}
    </div>
  );
};

export default MobileNavLinks;
