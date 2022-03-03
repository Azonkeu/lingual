import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import './menu.css';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);
const transition = { duration: 0.33 };

const MenuToggle = ({ toggle, isOpen }) => (
  <div className="but" onClick={toggle} onKeyPress={toggle} role="button" tabIndex="0">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        animate={isOpen ? 'open' : 'closed'}
        initial={false}
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5', stroke: 'hsl(0, 0%, 18%)' },
          open: { d: 'M 3 16.5 L 17 2.5', stroke: 'hsl(0, 0%, 18%)' },
        }}
        transition={transition}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        stroke="hsl(0, 0%, 18%)"
        animate={isOpen ? 'open' : 'closed'}
        initial={false}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={transition}
      />
      <Path
        animate={isOpen ? 'open' : 'closed'}
        initial={false}
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346', stroke: 'hsl(0, 0%, 18%)' },
          open: { d: 'M 3 2.5 L 17 16.346', stroke: 'hsl(0, 0%, 18%)' },
        }}
        transition={transition}
      />
    </svg>
  </div>
);

MenuToggle.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default MenuToggle;
