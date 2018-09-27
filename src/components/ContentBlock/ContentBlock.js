import React, { Component } from 'react';
import styles from './ContentBlock.module.css';

class ContentBlock extends Component {
  render() {
    return (
      <div id={styles.contentblock} className="py-5 px-5">
        {this.props.children}
      </div>
    );
  }
}

export default ContentBlock;