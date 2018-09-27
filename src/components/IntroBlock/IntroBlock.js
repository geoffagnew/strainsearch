import React, { Component } from 'react';
import './IntroBlock.scss';

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