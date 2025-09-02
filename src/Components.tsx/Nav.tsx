import React from 'react';
import './Nav.css';

const Nav: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Save Your Notes
      </div>
      <div className="navbar-links">
        <button className="navbar-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Nav;
