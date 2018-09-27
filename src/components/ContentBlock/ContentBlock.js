import React, { Component } from 'react';
import './ContentBlock.scss';

class ContentBlock extends Component {
  render() {
    return (
      <div id="contentblock" className="py-5 px-5">
        {this.props.children}
      </div>
    );
  }
}

export default ContentBlock;