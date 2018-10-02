import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FilterBlock from './../FilterBlock/FilterBlock';
import FormCheckInline from './../FormCheckInline/FormCheckInline';

class HomePanel extends Component {
  render() {
    return (
      <div className="home-wrap">
        <div className="container">
          <div className="panel-home">
            <div className="panel-col-1 panel-flash px-5">
              <span>Image Laurie Rowan</span>
            </div>
            <div className="panel-col-2 px-5">
              <ul className="tabs">
                <li className="tabs__tab tabs__tab--active"><a href="#">Recreational effects</a></li>
                <li className="tabs__tab"><a href="#">Medicinal effects</a></li>
              </ul>
              <h1 className="font-weight-bold h2 mb-3">Find the right marijuana for your mood</h1>
              <FilterBlock filterTitle="I want to feel:">
                <Link to="/effects/relaxed" className="btn btn-outline-primary btn-sm mr-2">Relaxed</Link>
                <Link to="/effects/creative" className="btn btn-outline-primary btn-sm mr-2">Creative</Link>
                <Link to="/effects/focused" className="btn btn-outline-primary btn-sm mr-2">Focused</Link>
              </FilterBlock>
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default HomePanel;