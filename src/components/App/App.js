import React, { Component } from 'react';
import Navigation from './../Navigation/Navigation';
import IntroBlock from './../IntroBlock/IntroBlock';
import ContentBlock from './../ContentBlock/ContentBlock';
import FilterBlock from './../FilterBlock/FilterBlock';
import FormCheckInline from './../FormCheckInline/FormCheckInline';
import './../../styles/global/bootstrap.min.css';
import './../../styles/global/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container my-5">
          <IntroBlock text="Find the right marijuana for you"/>
          <ContentBlock>
            <FilterBlock filterTitle="I want to feel:">
              <FormCheckInline label="Happy" id="check1"/>
              <FormCheckInline label="Relaxed" id="check2"/>
              <FormCheckInline label="Euphoric" id="check3"/>
              <FormCheckInline label="Uplifted" id="check4"/>
            </FilterBlock>
          </ContentBlock>
        </div>
      </div>
    );
  }
}

export default App;
