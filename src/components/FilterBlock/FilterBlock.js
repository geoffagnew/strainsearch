import React, { Component } from 'react';
import styles from './FilterBlock.module.css';

class FilterBlock extends Component {
  render() {
    return (
      <div id={styles.filterblock} className="p-4">
        <h2 className="h5 font-weight-bold">{this.props.filterTitle}</h2>
        <form onSubmit={this.handleSubmit}>
          {this.props.children}
        </form>
        <button className="btn btn-lg">Search strains</button>
      </div>
    );
  }
}

export default FilterBlock;