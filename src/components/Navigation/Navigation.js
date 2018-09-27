import React, { Component } from 'react';
import './Navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <div id="mainnav" className="py-4 px-5">
        <span>Weed Wizard</span>
        <nav>
          <ul>
            <li><a href="#">All strains</a></li>
            <li><a href="#">About WW</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;