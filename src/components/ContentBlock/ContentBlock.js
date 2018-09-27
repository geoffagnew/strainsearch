import React, { Component } from 'react';
import './ContentBlock.scss';

class ContentBlock extends Component {
  render() {
    return (
      <div id="contentblock">
        {this.props.children}
      </div>
    );
  }
}

export default ContentBlock;