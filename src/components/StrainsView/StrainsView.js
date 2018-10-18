import React, { Component } from 'react';
import SearchShelf from '../SearchShelf/SearchShelf';
import ContentBlock from '../ContentBlock/ContentBlock';
import StrainListItem from '../StrainListItem/StrainListItem';
import StrainProfile from '../StrainProfile/StrainProfile';
import FilterButtonSmall from '../FilterButtonSmall/FilterButtonSmall';
import { Route } from 'react-router-dom';
import ApiKey from '../../config';
import './StrainsView.scss';

class StrainsView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // strains collects all the strains from the api based on the effect value passed to the fetch request
      strains: [],
      // effectId contains the effect value passed via the url params. This is used in the fetch request below
      effectId: null,
      // controls what strain visibility when user clicks a strain filter button. This value will default to 'all' when the componentDidMount method is run
      strainVisible: null,
      // lets the strains-filter component know when the strain list has been loaded. This prevents premature display of the filters on the page
      strainsLoaded: false,
      // controls when to show default placeholder text in place of the strainProfile component
      strainProfileSelected: false,
      // controls whether the drop down search bar is visible
      searchVisible: false
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

  // function to handle showing and hiding placeholder text when a strainProfile hasn't yet been selected
  strainSelected = () => {
   if(!this.state.strainProfileSelected)
    this.setState({
      strainProfileSelected: true
    })
  }

  // function to handle toggling the search shelf on the strainsView page
  toggleSearch = (e) => {
    e.preventDefault();
    if(!this.state.searchVisible) {
      this.setState({ searchVisible: true })
    } else {
      this.setState({ searchVisible: false })
    }
  }

  // function that calls the API based on the effect value and updates the local state
  buildStrainList = (urlParams) => {
    if (this.state.searchVisible) {
      this.setState({ searchVisible: false});
    }

    fetch(`https://strainapi.herokuapp.com/${ApiKey}/strains/search/effect/${urlParams}`)
      .then((response) => response.json())
      .then((data) => this.setState({ 
        strains: data, 
        effectId: urlParams, 
        strainsLoaded: true,
        strainVisible: 'all',
        strainProfileSelected: false
      }))
      .catch((err) => console.log(`Something went wrong ${err}`));
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.buildStrainList(id);
  }

  // fired everytime a component's props or state is updated
  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    if (id !== prevProps.match.params.id && prevProps.match.params.id !== null) {
      this.buildStrainList(id);
    }
  }

  render() {

    // if effect value is available in state, load it into the strainEffectPath variable for use in Route below
    let strainEffectPath;
    if(this.state.effectId) {
      strainEffectPath = this.state.effectId;
    }

    // define strainsList variable to hold all strains from the array.map function below, and then displayed on the page
    const { strains } = this.state;
    let filterSelection;
    let strainsList;

    // logic to build the strains list that appears in the sidebar
    if (this.state.strains.length > 0) {

      if (this.state.strainVisible === 'sativa' || this.state.strainVisible === 'indica' || this.state.strainVisible === 'hybrid') {
        filterSelection = 'hide';
      }

      strainsList = strains.map((strain) =>
        <StrainListItem 
          key={strain.id}
          effectId={this.state.effectId}
          strainName={strain.name}
          strainRace={strain.race}
          strainEffect={strain.effect}
          strainSelected={this.strainSelected}
          shouldHide={this.state.strainVisible !== strain.race ? filterSelection : 'show'} 
        />
      );

    } else {
      strainsList = 
        <li className="pt-5 px-4">
          <h3 className="h6 mb-0">Strain data is loading</h3>
        </li>;
    }


    return (
      <div>
      <SearchShelf searchVisible={this.state.searchVisible} />
      <ContentBlock>
        <div className="container">
          <div className="row my-5">
            <div className="col-md-6">
              <h1 className="capitalize">{this.props.match.params.id}</h1>
            </div>
            <div className="col-md-6">
              <a href="/new-search" className="btn btn-primary float-right" onClick={this.toggleSearch}>{this.state.searchVisible === false ? 'Start new search' : 'Close search'}</a>
            </div>
          </div>
          <div className="row strain-view-wrap">
            <div className="col-md-4 strain-list-wrapper pb-4 px-0">
            {this.state.strainsLoaded && 
              <div className="strains-filter py-3 px-4">
                <p className="mb-1 filter-heading">Filter by type</p>
                <FilterButtonSmall btnText="Sativa" customCssId="colour-sativa" toggleStrains={this.toggleStrains} />
                <FilterButtonSmall btnText="Indica" customCssId="colour-indica" toggleStrains={this.toggleStrains} />
                <FilterButtonSmall btnText="Hybrid" customCssId="colour-hybrid" toggleStrains={this.toggleStrains} />
                {this.state.strainVisible !== 'all' ? <FilterButtonSmall btnText="Reset" customCssId="colour-reset" toggleStrains={this.toggleStrains} /> : ''}
              </div>}
              <ul className="strain-list pl-0">
                {strainsList}
              </ul>
            </div>

            <Route 
              path={`/effects/${strainEffectPath}/strain/:id`} 
              component={StrainProfile}
            />

            {!this.state.strainProfileSelected &&
              <div className="col-md-8 pt-5 px-5 strain-placeholder-text">
                <h4 className="h5 text-center">Select a strain from the sidebar to get started.</h4>
              </div>
            }

          </div>
        </div>
      </ContentBlock>
      </div>
    );
  }
}

export default StrainsView;