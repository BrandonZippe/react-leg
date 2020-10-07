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
    function compare(a, b) {
        if (a.seasonId < b.seasonId) {
            return -1;
        }
        if (a.seasonId > b.seasonId) {
            return 1;
        }
        return 0;
    }
    json.sort(compare);
    this.setState({ data: json });
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
        const id = obj.id;
        const owner = fn + '_' + ln;

        let filteredOwner = this.state.atMembers.filter(member => member['owner'] !== owner && member['owner'] !== 'Chris_Castillo');

        this.setState({
          atMembers: [...filteredOwner, {owner, id}]
        });

        if (i === lastSeason) {
          let filteredOwner = this.state.curMembers.filter(member => member['owner'] !== owner && member['owner'] !== 'Chris_Castillo');

          this.setState({
            curMembers: [...filteredOwner, {owner, id}]
          });
        }
      }
    }
    console.log(this.state.atMembers);
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
          <Tiles members={memberArr} data={this.state.data} />
        </article>
      </main>
    )
  }
}

export default Main;
