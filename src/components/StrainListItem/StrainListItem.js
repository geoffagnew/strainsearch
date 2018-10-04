import React from 'react';
import { NavLink } from 'react-router-dom';
import recOptions from '../../data/strain-options-rec.json';
import StrainIcon from '../StrainIcon/StrainIcon';
import './StrainListItem.scss';

const StrainListItem = (props) => (
  
  <NavLink to={`/effects/${props.effectId}/strain/${props.strainName}`} >
    <li className="strain-list__item py-2 px-4">
      <h3 className="h6 mb-0 font-weight-bold">{props.strainName}</h3>
      <span className="strain-race"><StrainIcon strainName={props.strainRace} iconSize="15px" /> {props.strainRace}</span>
      <span className="ml-1">
        {recOptions.indexOf(props.strainEffect) !== -1 ? '— Desired effect: ' : '— Useful for treating '}
        {props.strainEffect}
      </span>
    </li>
  </NavLink>

);

export default StrainListItem;