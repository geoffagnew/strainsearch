import React, { Component } from 'react';
import './FilterBlock.scss';

class FilterBlock extends Component {
  render() {
    return (
      <div id="filterblock">
        <h2 className="h5 font-weight-bold">{this.props.filterTitle}</h2>
        <form onSubmit={this.handleSubmit}>
          {this.props.children}
        </form>
        <button type="button" className="btn btn-primary" disabled aria-disabled="true">Search strains</button>
      </div>
    );
  }
}

export default FilterBlock;