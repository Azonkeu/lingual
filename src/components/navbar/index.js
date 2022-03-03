import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import Accessibility from './accessibility';
import Navbar from './Navbar';
import MobileNavLinks from './mobileNav';
import './nav.css';

const Nav = () => {
  const DeviceSize = {
    mobile: 768,
    tablet: 992,
    laptop: 1324,
    desktop: 2024,
  };
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  return (
    <div className="nav">
      <Link className="left" to="/">
        <img src={logo} alt="logo" className="logo" />
        GilorSpeak
      </Link>
      <div className="middle">{!isMobile && <Navbar />}</div>
      <div className="right">
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks />}
      </div>
    </div>
  );
};

export default Nav;
