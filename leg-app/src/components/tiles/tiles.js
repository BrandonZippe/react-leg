import React from 'react';
import './tiles.scss';



const leagueDataPath = 'https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/628822?view=mLiveScoring&view=mMatchupScore&view=mStandings&view=mStatus&view=mTeam';

function TileContent(props) {
  return (
    <div className="statTile">
      <span className="team">{props.name}</span>
    </div>
  )
}

function Tile(props) {
  const members = props.members;
  const memberNames = members.map((member) =>
  <TileContent
    key={member}
    name={member.replace('_', ' ')}
  />
  );
  return memberNames;
}

class Tiles extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      error: null,
      isLoaded: false,
      data: [],
      atMembers: [],
      curMembers: [],

    }
  };

  componentDidMount() {
    this.getLeagueData();
  }

  async getLeagueData() {
    const response = await fetch(leagueDataPath);
    const json = await response.json();
    this.setState({ data: json });
    console.log(this.state.data);
    this.parseMembers(json);
  }

  parseMembers(data) {
    for (let i = 0; i < data.length; i++){
      const d = data[i];
      const members = d.members;

      for (const obj of members) {
        const fn = obj.firstName;
        const ln = obj.lastName;
        const owner = fn + '_' + ln;

        let filteredOwner = this.state.atMembers.filter(member => member !== owner && member !== 'Chris_Castillo');

        this.setState({
          atMembers: [...filteredOwner, owner]
        });
      }

    }
    console.log(this.state.atMembers);
  }

  render() {
    return (
      <article id="allTimeMembers" className="contentBox">
        <Tile members={this.state.atMembers} />
      </article>
    );
  };

}

export default Tiles;
