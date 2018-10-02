import React from 'react';
import { Link } from 'react-router-dom';
import './StrainListItem.scss';

const StrainListItem = (props) => (
  
  <Link 
    to={`/effects/${props.effectId}/strain/${props.strainName}`} 
    className={"strain-link" + (props.strainName === 'Afpak' ? '--active' : '')} 
  >
    <li className="strain-list__item py-2 px-4">
      <h3 className="h6 mb-0 font-weight-bold">{props.strainName}</h3>
      <span className="strain-race">Strain: {props.strainRace}</span>
      <span>Effects: {props.strainEffect}</span>
    </li>
  </Link>

);

export default StrainListItem;