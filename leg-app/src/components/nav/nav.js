import React from 'react';
import './nav.scss';

function NavItem(props) {
  return (
    <div id={props.id} className={props.isOn} onClick={props.onClick}>{props.text}</div>
  );
}

export default NavItem;
