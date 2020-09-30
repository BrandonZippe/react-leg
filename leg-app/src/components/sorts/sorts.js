import React from 'react';
import './sorts.scss';

const sorts = [
  {
    id: 'data-wp',
    content: 'Win %'
  },
  {
    id: 'data-win',
    content: 'Wins'
  },
  {
    id: 'data-title',
    content: 'Titles'
  },
  {
    id: 'data-pf',
    content: 'Points For'
  },
  {
    id: 'data-pa',
    content: 'Points Against'
  },
  {
    id: 'data-tb',
    content: 'Toilet Bowls'
  }
];

function SortItem(props) {
  return (
    <span id={props.id} className={props.className} onClick={props.onClick}>{props.text}</span>
  );
}

function SortsNav(props) {
  const sorts = props.sorts;
  const activeId = props.activeId;
  const sortInactiveClass = 'sortBtn';
  const sortActiveClass = sortInactiveClass + ' selected';
  const sortItems = sorts.map((sort) =>
    <SortItem
      key={sort.id}
      id={sort.id}
      className={sort.id === activeId ? sortActiveClass : sortInactiveClass}
      onClick={() => props.onClick(sort.id)}
      text={sort.content}
    />
  );

  return (
    <nav>
      {sortItems}
    </nav>
  );
}

class Sorts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      activeId: 'data-wp',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    this.setState({
      active: true,
      activeId: i,
    });
  }

  render () {
    return (
      <SortsNav sorts={sorts} onClick={(i) => this.handleClick(i)} activeId={this.state.activeId}/>
    );
  };
}

export default Sorts;
