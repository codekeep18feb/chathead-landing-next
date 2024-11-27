// components/Header.js
import React from 'react';
import Navbar from './Navbar';

const Header = ({ onLinkHover, onNavLeave }) => {
  return (
    // <header className="header">
      <Navbar onLinkHover={onLinkHover} onNavLeave={onNavLeave}/>
    // </header>
  );
};

export default Header;
