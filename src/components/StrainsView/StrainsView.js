import React, { Component } from 'react';
import ContentBlock from '../ContentBlock/ContentBlock';
import StrainListItem from '../StrainListItem/StrainListItem';
import StrainProfile from '../StrainProfile/StrainProfile';
import StrainFilterButtons from '../StrainFilterButtons/StrainFilterButtons';
import FilterButtonSmall from '../FilterButtonSmall/FilterButtonSmall';
import { Route } from 'react-router-dom';
import ApiKey from '../../config';
import './StrainsView.scss';
import { select } from 'glamor';

class StrainsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // strains collects all the strains from the api based on the effect value passed to the fetch request
      strains: [],
      // effectId contains the effect value passed via the url params. This is used in the fetch request below
      effectId: null,
      strainVisible: 'all'
    };
  }

  // function to handle showing and hiding only the selected strains
  toggleStrains = (e) => {
    let selectedFilter = e.target.textContent.toLowerCase();
    if (selectedFilter === 'reset') {
      selectedFilter = 'all';
    }
    this.setState({
      strainVisible: selectedFilter
    })
  }

  // function that calls the API based on the effect value and updates the local state
  buildStrainList = (urlParams) => {
    fetch(`http://strainapi.evanbusse.com/${ApiKey}/strains/search/effect/${urlParams}`)
      .then((response) => response.json())
      .then((data) => this.setState({ strains: data, effectId: urlParams }))
      .catch((err) => console.log(`Something went wrong ${err}`));
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.buildStrainList(id);
  }

  render() {

    // if effect value is available in state, load it into the strainEffectPath variable for use in Route below
    let strainEffectPath;
    if(this.state.effectId) {
      strainEffectPath = this.state.effectId;
    }

    // define strainsList variable to hold all strains from the array.map function below, and then displayed on the page
    let strainsList;
    let selectedStrains;

    if (this.state.strains.length > 0) {

      if (this.state.strainVisible === 'sativa') {
        selectedStrains = this.state.strains.filter(strain => {
          if (strain.race === 'sativa') {
            return true;
          }
        });
      } else if (this.state.strainVisible === 'hybrid') {
        selectedStrains = this.state.strains.filter(strain => {
          if (strain.race === 'hybrid') {
            return true;
          }
        });
      } else if (this.state.strainVisible === 'indica') {
        selectedStrains = this.state.strains.filter(strain => {
          if (strain.race === 'indica') {
            return true;
          }
        });
      } else {
        selectedStrains = this.state.strains.map((strain) => strain);
      }

      strainsList = selectedStrains.map((strain) =>
        <StrainListItem 
          key={strain.id}
          effectId={this.state.effectId}
          strainName={strain.name}
          strainRace={strain.race}
          strainEffect={strain.effect}
        />
      );
    } else {
      strainsList = <p>Data is loading.</p>;
    }

    return (
      <ContentBlock>
        <div className="container">
          <div className="row my-5">
            <div className="col-md-12">
              <h1 className="capitalize">{this.props.match.params.id}</h1>
            </div>
          </div>
          <div className="row strain-view-wrap">
            <div className="col-md-4 strain-list-wrapper pb-4 px-0">
              <p className="mb-0">Filter by type</p>
                <FilterButtonSmall btnText="Sativa" toggleStrains={this.toggleStrains} />
                <FilterButtonSmall btnText="Indica" toggleStrains={this.toggleStrains} />
                <FilterButtonSmall btnText="Hybrid" toggleStrains={this.toggleStrains} />
                <FilterButtonSmall btnText="Reset" toggleStrains={this.toggleStrains} />
              <ul className="strain-list pl-0">
                {strainsList}
              </ul>
            </div>
            <Route 
              path={`/effects/${strainEffectPath}/strain/:id`} 
              component={StrainProfile}
            />
          </div>
        </div>
      </ContentBlock>
    );
  }
}

export default StrainsView;