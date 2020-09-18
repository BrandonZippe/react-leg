import React from 'react';
import './sorts.scss';

function SortItem(props) {
  return (
    <span id={props.id} className={props.cssClass} onClick={props.onClick}>{props.text}</span>
  );
}


function Sorts() {
  const cssName = 'sortBtn';
  return (
    <nav>
      <SortItem id="data-wp" cssClass={cssName + " selected"} text="Win %" />
      <SortItem id="data-win" cssClass={cssName} text="Wins" />
      <SortItem id="data-title" cssClass={cssName} text="Titles" />
      <SortItem id="data-pf" cssClass={cssName} text="Points For" />
      <SortItem id="data-pa" cssClass={cssName} text="Points Against" />
      <SortItem id="data-tb" cssClass={cssName} text="Toilet Bowls" />
    </nav>
  );
}

export default Sorts;
