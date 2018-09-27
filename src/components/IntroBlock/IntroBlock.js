import React, { Component } from 'react';
import styles from './IntroBlock.module.css';

class IntroBlock extends Component {
  render() {
    return (
      <div className="my-5">
        <h1 className="text-center display-4">{this.props.text}</h1>
      </div>
    );
  }
}

export default IntroBlock;