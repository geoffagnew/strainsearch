import React from 'react';
import './StrainIcon.scss';

const StrainIcon = ({ strainName }) => {
  switch(strainName) {
    case 'sativa':
      return (
        <span className="icon-strain icon-strain__icon-sativa">S</span>
      );
    case 'indica':
      return (
        <span className="icon-strain icon-strain__icon-indica">I</span>
      );
    default:
      return (
        <span className="icon-strain icon-strain__icon-hybrid">H</span>
      );
  }
}

export default StrainIcon;