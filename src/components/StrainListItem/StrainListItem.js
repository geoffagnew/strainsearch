import React from 'react';
import { Link } from 'react-router-dom';
import './StrainListItem.scss';

const StrainListItem = (props) => (

  <Link to={`/effects/creative/strain/${props.strainName}`}>
    <li className="strain-list-item py-2 px-2">
      <h3 className="h5 mb-0 font-weight-bold">{props.strainName}</h3>
      <span className="strain-race">Strain: {props.strainRace}</span>
      <span>Effects: {props.strainEffect}</span>
    </li>
  </Link>

);

export default StrainListItem;