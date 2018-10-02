import React, { Component } from 'react';
import FilterBlock from './../FilterBlock/FilterBlock';
import Tab from './../Tab/Tab';
import './HomePanel.scss';

const recOptions = {
  id: 'recreactional',
  head: 'Find the marijuana strain to suit your mood',
  subHead: 'I want to feel:',
  options: ['Relaxed', 'Creative', 'Focused', 'Hungry', 'Energetic', 'Giggly', 'Euphoric', 'Talkative', 'Aroused', 'Happy']
}

const medOptions = {
  id: 'medicinal',
  head: 'Find the right marijuana strain for what ails you',
  subHead: 'I want to treat:',
  options: ['Depression', 'Insomnia', 'Stress', 'Cramps', 'Nausea', 'Headaches', 'Eye Pressure', 'Inflammation', 'Spasticity', 'Seizures', 'Muscle Spasms']
}

class HomePanel extends Component {
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
      <div className="home-wrap">
        <div className="container">
          <div className="panel-home">
            <div className="panel-col-1 panel-flash px-5">
              <span>Image Laurie Rowan</span>
            </div>
            <div className="panel-col-2 px-5">
              <ul className="tabs mb-0">
                <Tab tabText="Recreational effects" currentView={this.state.selectedView} handleTabClick={this.handleTabClick} id="recreational" />
                <Tab tabText="Medicinal effects" currentView={this.state.selectedView} handleTabClick={this.handleTabClick} id="medicinal" />
              </ul>
              <FilterBlock 
                filterHead={this.state.selectedViewDetails.head} 
                filterSubhead={this.state.selectedViewDetails.subHead}
                filterOptions={this.state.selectedViewDetails.options}
              />
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default HomePanel;