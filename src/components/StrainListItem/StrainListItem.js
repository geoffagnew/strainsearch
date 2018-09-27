import React, { Component } from 'react';
import './StrainListItem.scss';

class StrainListItem extends Component {
  render() {
    return (
      <li className="strain-list-item py-2 px-2">
        <h3 className="h5 mb-0 font-weight-bold">{this.props.strainName}</h3>
        <span className="strain-race">Strain: {this.props.strainRace}</span>
        <span>Effects: {this.props.strainEffect}</span>
      </li>
    );
  }
}

export default StrainListItem;