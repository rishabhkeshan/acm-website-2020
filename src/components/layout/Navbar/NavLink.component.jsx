import React from 'react';
import { withSize } from 'react-sizeme';
import PropTypes from 'prop-types';

const NavLink = props => {
  const { children, active, scrollTo, getProps } = props;

  return (
    <a href={`#${scrollTo}`}>
      <div
        ref={el => {
          if (!el) return;
          // Get width and offsetX of the link
          getProps(
            el.getBoundingClientRect().width,
            el.getBoundingClientRect().x
          );
        }}
        className={`cursor-pointer hover:text-blue-300 focus:outline-none mx-4 ${active &&
          'text-acm-blue'}`}
        role="button"
        tabIndex="-1"
      >
        {children}
      </div>
    </a>
  );
};

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  scrollTo: PropTypes.string.isRequired,
  getProps: PropTypes.func.isRequired
};

export default withSize()(NavLink);
