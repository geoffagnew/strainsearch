import React, { Component } from 'react';
import FilterBlock from './../FilterBlock/FilterBlock';
import Tab from './../Tab/Tab';
import recEffects from '../../data/strain-options-rec.json';
import medEffects from '../../data/strain-options-med.json';
import './SearchShelf.scss';

const recOptions = {
  id: 'recreactional',
  head: 'Find the marijuana strain to suit your mood',
  options: recEffects
}

const medOptions = {
  id: 'medicinal',
  head: 'Find the right marijuana strain for what ails you',
  options: medEffects
}

class SearchShelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedView: 'recreational',
      selectedViewDetails: recOptions 
    }
  }

  // event listener for toggling between tabs and displaying the relevant content in FilterBlock component
  handleTabClick = (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    if(this.state.selectedView === 'recreational') {
      this.setState({
        selectedView: id,
        selectedViewDetails: medOptions
      });
    } else {
      this.setState({
        selectedView: id,
        selectedViewDetails: recOptions
      });
    }
  }

  render() {
    return (
      <div className="search-shelf-wrapper">
        <div className="container">
          <div className="row py-4">
            <div className="col-md-12">
              <ul className="tabs mb-3">
                <Tab tabText="Recreational effects" currentView={this.state.selectedView} handleTabClick={this.handleTabClick} id="recreational" />
                <Tab tabText="Medicinal effects" currentView={this.state.selectedView} handleTabClick={this.handleTabClick} id="medicinal" />
              </ul>
              <FilterBlock 
                filterHead={null}
                filterSubhead={this.state.selectedViewDetails.head}
                filterOptions={this.state.selectedViewDetails.options}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchShelf;