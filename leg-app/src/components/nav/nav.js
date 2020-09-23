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
      allInActive: false,
      currentActive: false,
    };
    this.handleAllInClick = this.handleAllInClick.bind(this);
    this.handleCurrentClick = this.handleCurrentClick.bind(this);
  }

  handleAllInClick() {
    if (!this.state.allInActive) {
      this.setState((prevState) => ({
        ...prevState,
        allInActive: !prevState.allInActive,
        currentActive: !prevState.allInActive,
      }));
    }
  };

  handleCurrentClick() {
    if (this.state.currentActive) {
      this.setState((prevState) => ({
        ...prevState,
        currentActive: !prevState.currentActive,
        allInActive: !prevState.currentActive,
      }));
    }
  };


  render () {
    const { allInActive, currentActive } = this.state;
    return (
      <nav>
        <NavItem id="allTime" isOn={allInActive ? 'on' : null} text="All Time Members" onClick={this.handleAllInClick} />
        <NavItem id="current" isOn={!currentActive ? 'on' : null} text="Current Members" onClick={this.handleCurrentClick} />
      </nav>
    );
  }

}

export default Nav;
