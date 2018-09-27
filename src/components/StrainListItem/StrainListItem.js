import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './StrainListItem.scss';

class StrainListItem extends Component {
  render() {
    const strainName = `/strains/${this.props.strainName}`;
    return (
      <Link to={strainName}>
        <li className="strain-list-item py-2 px-2">
          <h3 className="h5 mb-0 font-weight-bold">{this.props.strainName}</h3>
          <span className="strain-race">Strain: {this.props.strainRace}</span>
          <span>Effects: {this.props.strainEffect}</span>
        </li>
      </Link>
    );
  }
}

export default StrainListItem;