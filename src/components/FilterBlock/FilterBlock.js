import React, { Component } from 'react';
import styles from './FilterBlock.module.css';

class FilterBlock extends Component {
  render() {
    return (
      <div id={styles.filterblock}>
        <h2 className="h5 font-weight-bold">{this.props.filterTitle}</h2>
        <form onSubmit={this.handleSubmit}>
          {this.props.children}
        </form>
        <button className="btn btn-primary">Search strains</button>
      </div>
    );
  }
}

export default FilterBlock;