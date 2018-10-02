import React from 'react';
import './Tab.scss';

const Tab = (props) => {
  if(props.currentView === props.id) {
    return (
      <li className="tabs__tab tabs__tab--active">
        <a href={props.tabText} data-id={props.id} onClick={props.handleTabClick}>{props.tabText}</a>
      </li>
    );
  }
  return (
    <li className="tabs__tab">
        <a href={props.tabText} data-id={props.id} onClick={props.handleTabClick}>{props.tabText}</a>
    </li>
  );
};

export default Tab;