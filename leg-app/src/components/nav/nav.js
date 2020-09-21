import React from 'react';
import './nav.scss';

function NavItem(props) {
  return (
    <div id={props.id} className={props.isOn} onClick={props.onClick}>{props.text}</div>
  );
}

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    const currentState = this.state.active;
    console.log(this.state.active);
    this.setState({
      active: !currentState
    });
  };


  render () {
    return (
      <nav>
        <NavItem id="allTime" isOn={this.state.active ? 'on' : null} text="All Time Members" onClick={() => this.toggleClass()} />
        <NavItem id="current" isOn="on" text="Current Members" onClick={() => this.toggleClass()} />
      </nav>
    );
  }

}

export default Nav;
