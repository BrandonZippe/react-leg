import React from 'react';
import './header.scss';
import logo from '../../assets/leg-logo.png';
import Nav from '../nav/nav';

function Header() {
  const firstYear = 2012;
  const date = new Date();
  const legYears = date.getFullYear() - firstYear;
  const tagline = legYears + ' years of extraordinary genitals.';

  return (
    <header className="header">
      <img
        src={logo}
        className="logo"
        alt="L.E.G. Logo"
        title="L.E.G. Logo"
      />
      <h1 className="tagline">
        OF RECORD
        <span className="fancy">{tagline}</span>
      </h1>
      <Nav />
    </header>
  );
}

export default Header;
