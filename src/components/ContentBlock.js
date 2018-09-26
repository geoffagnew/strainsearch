import React, { Component } from 'react';

class ContentBlock extends Component {
  render() {
    return (
      <div className="content-block">
        <h2>Content block</h2>
        {this.props.children}
      </div>
    );
  }
}

export default ContentBlock;