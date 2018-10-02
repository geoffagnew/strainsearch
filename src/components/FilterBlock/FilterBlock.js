import React, { Component } from 'react';
import './FilterBlock.scss';

class FilterBlock extends Component {
  render() {
    return (
      <div id="filterblock">
        <h2 className="h5 font-weight-bold">{this.props.filterTitle}</h2>
        {this.props.children}
      </div>
    );
  }
}

export default FilterBlock;