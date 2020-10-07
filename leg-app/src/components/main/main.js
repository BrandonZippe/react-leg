import React from 'react';
import Sorts from '../sorts/sorts';
import Tiles from '../tiles/tiles';
import NavItem from '../nav/nav';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allInActive: false,
      currentActive: false,
      error: null,
      isLoaded: false,
      data: [],
      atMembers: [],
      curMembers: [],
    };

    this.handleAllClick = this.handleAllClick.bind(this);
    this.handleCurrentClick = this.handleCurrentClick.bind(this);
  }

  componentDidMount() {
    this.getLeagueData();
  }

  async getLeagueData() {
    const leagueDataPath = 'https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/628822?view=mLiveScoring&view=mMatchupScore&view=mStandings&view=mStatus&view=mTeam';
    const response = await fetch(leagueDataPath);
    const json = await response.json();
    this.setState({ data: json });
    // console.log(this.state.data);
    this.parseMembers(json);
  }

  parseMembers(data) {
    for (let i = 0; i < data.length; i++){
      const d = data[i];
      const members = d.members;
      const lastSeason = data.length - 1;

      for (const obj of members) {
        const fn = obj.firstName;
        const ln = obj.lastName;
        const owner = fn + '_' + ln;

        let filteredOwner = this.state.atMembers.filter(member => member !== owner && member !== 'Chris_Castillo');

        this.setState({
          atMembers: [...filteredOwner, owner]
        });

        if (i === lastSeason) {
          let filteredOwner = this.state.curMembers.filter(member => member !== owner && member !== 'Chris_Castillo');

          this.setState({
            curMembers: [...filteredOwner, owner]
          });
        }

      }
    }
  }

  handleAllClick() {
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


  render() {
    const { allInActive, currentActive } = this.state;
    let memberArr = this.state.allInActive ? this.state.atMembers : this.state.curMembers;

    return (
      <main>
      <nav className="mainNav">
        <NavItem id="allTime" isOn={allInActive ? 'on' : null} text="All Time Members" onClick={this.handleAllClick} />
        <NavItem id="current" isOn={!currentActive ? 'on' : null} text="Current Members" onClick={this.handleCurrentClick} />
      </nav>
        <Sorts />
        <article className="contentBox">
          <Tiles members={memberArr} />
        </article>
      </main>
    )
  }
}

export default Main;
