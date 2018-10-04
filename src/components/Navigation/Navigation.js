import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <div id="mainnav" className="py-4 px-5">
        <span><Link to='/'>Strain Search</Link></span>
        <nav>
          <ul className="mb-0">
            <li><Link to="/about-strain-search">About SS</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;