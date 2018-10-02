import React from 'react';

const Tab = (props) => (
  <li className="tabs__tab tabs__tab--active">
    <a href={props.tabText} data-id={props.id} onClick={props.handleTabClick}>{props.tabText}</a>
  </li>
);

export default Tab;