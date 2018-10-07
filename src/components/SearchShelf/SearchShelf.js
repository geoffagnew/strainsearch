import React from 'react';
import FilterBlock from './../FilterBlock/FilterBlock';
// import recEffects from '../../data/strain-options-rec.json';
import medEffects from '../../data/strain-options-med.json';
import './SearchShelf.scss';

const SearchShelf = (props) => {
  return (
    <div className="search-shelf-wrapper">
      <div className="container">
        <div className="row py-4">
          <div className="col-md-12">
            <FilterBlock 
              filterHead={null}
              filterSubhead="Find new strains"
              filterOptions={medEffects}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchShelf;