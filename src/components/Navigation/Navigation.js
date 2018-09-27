import React, { Component } from 'react';
import styles from './Navigation.module.css';

class Navigation extends Component {
  render() {
    return (
      <nav id={styles.mainnav} className="py-4">
        <div className="container">
          <span>Weed Wizard</span>
        </div>
      </nav>
    );
  }
}

export default Navigation;