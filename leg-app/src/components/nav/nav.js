import React from 'react';
import './nav.scss';

function Nav() {
  return (
    <nav>
      <div id="allTime" onClick="">All Time Members</div>
      <div id="current" className="on" onClick="">Current Members</div>
    </nav>
  );
}

export default Nav;
