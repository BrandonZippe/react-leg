import React from 'react';
import Sorts from '../sorts/sorts';
import Tiles from '../tiles/tiles';
import Nav from '../nav/nav';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main>
        <Nav />
        <Sorts />
        <Tiles />
      </main>
    )
  }
}

export default Main;
