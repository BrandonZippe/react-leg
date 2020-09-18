import React from 'react';
import './nav.scss';

function NavItem(props) {
  return (
    <div id={props.id} className={props.isOn}>{props.text}</div>
  );
}

function Nav() {
  return (
    <nav>
      <NavItem id="allTime" isOn="" text="All Time Members" />
      <NavItem id="current" isOn="on" text="Current Members" />
    </nav>
  );
}



export default Nav;
