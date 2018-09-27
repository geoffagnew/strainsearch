import React, { Component } from 'react';

class FormCheckInline extends Component {
  render() {
    return (
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id={this.props.id} value={this.props.label} />
        <label className="form-check-label" for="inlineCheckbox2">{this.props.label}</label>
      </div>
    );
  }
}

export default FormCheckInline;