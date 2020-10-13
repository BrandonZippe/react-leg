import React from 'react';
import './tiles.scss';

function TileContent(props) {
  return (
    <div id={props.id} className="statTile">
      <span className="team">{props.name}</span>
    </div>
  )
}

function Tiles(props) {
  const members = props.members;
  //console.log(data);
  const memberNames = members.map((member) =>
  <TileContent
    key={member['owner']}
    name={member['owner'].replace('_', ' ')}
    id={member['teamId']}
  />
  );
  return memberNames;
}

export default Tiles;
