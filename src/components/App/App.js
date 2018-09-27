import React, { Component } from 'react';
import Navigation from './../Navigation/Navigation';
import IntroBlock from './../IntroBlock/IntroBlock';
// import ContentBlock from './../ContentBlock/ContentBlock';
import FilterBlock from './../FilterBlock/FilterBlock';
import FormCheckInline from './../FormCheckInline/FormCheckInline';
import './../../styles/global/bootstrap.min.css';
import './../../styles/global/App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="home-wrap">
          <div className="container">
              <div className="panel-home">
                <div className="panel-col-1 panel-flash px-5">
                  <span>Image Laurie Rowan</span>
                </div>
                <div className="panel-col-2 px-5">
                  <h1 className="font-weight-bold h2">Find the right marijuana for your mood</h1>
                  <FilterBlock filterTitle="I want to feel:">
                    <FormCheckInline label="Happy" id="check1"/>
                    <FormCheckInline label="Relaxed" id="check2"/>
                    <FormCheckInline label="Euphoric" id="check3"/>
                    <FormCheckInline label="Uplifted" id="check4"/>
                  </FilterBlock>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
