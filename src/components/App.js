import React, { Component } from 'react';
import ContentBlock from './ContentBlock';
import FilterBlock from './FilterBlock';
import './../styles/global/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContentBlock>
          <FilterBlock />
        </ContentBlock>
      </div>
    );
  }
}

export default App;
