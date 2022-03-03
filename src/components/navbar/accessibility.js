import React from 'react';
import { NavLink } from 'react-router-dom';
import './access.css';

const Accessibility = () => (
  <div className="container">
    <NavLink className="login" activeclassname="activex" to="login">Login</NavLink>
  </div>
);

export default Accessibility;
