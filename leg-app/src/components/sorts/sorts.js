import React from 'react';
import './sorts.scss';

const sortInactiveClass = 'sortBtn';
const sortActiveClass = sortInactiveClass + ' selected';
const sorts = [
  {
    id: 'data-wp',
    css: sortActiveClass,
    content: 'Win %'
  },
  {
    id: 'data-win',
    css: sortInactiveClass,
    content: 'Wins'
  },
  {
    id: 'data-title',
    css: sortInactiveClass,
    content: 'Titles'
  },
  {
    id: 'data-pf',
    css: sortInactiveClass,
    content: 'Points For'
  },
  {
    id: 'data-pa',
    css: sortInactiveClass,
    content: 'Points Against'
  },
  {
    id: 'data-tb',
    css: sortInactiveClass,
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
  const sortItems = sorts.map((sort) =>
    <SortItem
      key={sort.id}
      id={sort.id}
      className={sort.css}
      onClick={props.onClick}
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

    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  }


  render () {
    return (
      <SortsNav sorts={sorts} onClick={this.handleClick}/>
    );
  };

}

export default Sorts;
