import React, { Component } from 'react';
import styles from './../styles/components/FilterBlock.module.css';
import './../styles/global/App.css';

class FilterBlock extends Component {
  render() {
    return (
      <div className={styles.filterblock}>
        <h2>I want to feel:</h2>
      </div>
    );
  }
}

export default FilterBlock;