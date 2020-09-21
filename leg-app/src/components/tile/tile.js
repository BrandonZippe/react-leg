import React from 'react';
import './tile.scss';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      error: null,
      isLoaded: false,
      data: []
    }
  };

  componentDidMount() {

  }

}

export default Tile;
