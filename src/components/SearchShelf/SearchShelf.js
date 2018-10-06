import React, { Component } from 'react';
import FilterBlock from './../FilterBlock/FilterBlock';
// import recEffects from '../../data/strain-options-rec.json';
import medEffects from '../../data/strain-options-med.json';
import './SearchShelf.scss';

class SearchShelf extends Component {
  render() {
    return (
      <div className="search-shelf-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <FilterBlock 
                filterHead="Test header"
                filterSubhead="Test subheader"
                filterOptions={medEffects}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default SearchShelf;