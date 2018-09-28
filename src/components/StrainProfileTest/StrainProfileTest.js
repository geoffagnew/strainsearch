import React, { Component } from 'react';

class StrainProfileTest extends Component {
  render() {
    return(
      <div className="col-md-8 strain-list-wrapper p-4">
        <p>{this.props.match.params.id}</p>
      </div>
    );
  }
}

export default StrainProfileTest;