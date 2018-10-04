import React from 'react';
import IconSativa from '../../img/icon-strain-sativa.svg';
import IconIndica from '../../img/icon-strain-indica.svg';
import IconHybrid from '../../img/icon-strain-hybrid.svg';
import './StrainIcon.scss';

const StrainIcon = ({ strainName, iconSize }) => {
  switch(strainName) {
    case 'sativa':
      return (
        <span className="icon-strain--list">
          <img src={IconSativa} width={iconSize} height={iconSize} alt="Sativa icon" />
        </span>
      );
    case 'indica':
      return (
        <span className="icon-strain--list">
          <img src={IconIndica} width={iconSize} height={iconSize} alt="Indica icon" />
        </span>
      );
    default:
      return (
        <span className="icon-strain--list">
          <img src={IconHybrid} width={iconSize} height={iconSize} alt="Hybrid icon" />
        </span>
      );
  }
}

export default StrainIcon;