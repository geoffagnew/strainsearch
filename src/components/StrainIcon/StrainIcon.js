import React from 'react';
import IconSativa from '../../img/icon-strain-sativa.svg';
import IconIndica from '../../img/icon-strain-indica.svg';
import IconHybrid from '../../img/icon-strain-hybrid.svg';
import './StrainIcon.scss';

const StrainIcon = ({ strainName }) => {
  switch(strainName) {
    case 'sativa':
      return (
        <span className="icon-strain--list">
          <img src={IconSativa} width="15px" height="15px" />
        </span>
      );
    case 'indica':
      return (
        <span className="icon-strain--list">
          <img src={IconIndica} width="15px" height="15px" />
        </span>
      );
    default:
      return (
        <span className="icon-strain--list">
          <img src={IconHybrid} width="15px" height="15px" />
        </span>
      );
  }
}

export default StrainIcon;