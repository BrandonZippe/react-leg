import React from 'react';
import './tiles.scss';

function TileContent(props) {
  return (
    <div className="statTile">
      <span className="team">{props.name}</span>
    </div>
  )
}

function Tiles(props) {
  const members = props.members;
  const memberNames = members.map((member) =>
  <TileContent
    key={member}
    name={member.replace('_', ' ')}
  />
  );
  return memberNames;
}

export default Tiles;
