import React, { Component } from 'react';
import ContentBlock from '../ContentBlock/ContentBlock';
import ApiKey from '../../config';
import './StrainProfile.scss';

class StrainProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      strainName: null, 
      strainDetails: null,
      strainEffects: null,
      strainFlavors: null,
      isLoaded: false
    };
  }

  // method to handle all API requests for building the strain profile
  buildStrainProfile = (urlParams) => {
    let strainId;
    // fetch the 1st request (strain race, description and Id)
    let fetchResult = fetch(`http://strainapi.evanbusse.com/${ApiKey}/strains/search/name/${urlParams}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        strainName: urlParams,
        strainDetails: data
      })
      // get the id for this strain
      strainId = data[0].id;
      // make a 2nd request and return a promise
      return fetch(`http://strainapi.evanbusse.com/${ApiKey}/strains/data/effects/${strainId}`);
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ 
        strainEffects: data
      })
      // make a 3rd request and return a promise
      return fetch(`http://strainapi.evanbusse.com/${ApiKey}/strains/data/flavors/${strainId}`);
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ 
        strainFlavors: data,
        isLoaded: true
      })
    })
    .catch(error => console.log('Request failed', error));
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.buildStrainProfile(id);
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    if (prevState.strainName !== id) {
      this.buildStrainProfile(id);
    }
  }

  render() {

    const { strainName, strainDetails, strainEffects, strainFlavors, isLoaded } = this.state;

    let strainProfile,
        positiveEffects,
        negativeEffects;

    if(!isLoaded) {
      strainProfile = <p>Data is loading</p>;
    } else {
      strainProfile = 
        <div>
          <h1>{strainName}</h1>
          <p className="capitalize">{strainDetails[0].race}</p>
          <p>{strainDetails[0].desc}</p>
          {strainFlavors.length > 0 ? <p>Flavors: {strainFlavors}</p> : ''}
          {strainEffects.positive.length > 0 ? <p>Positive: {strainEffects.positive}</p> : ''}
          {strainEffects.negative.length > 0 ? <p>Negative: {strainEffects.negative}</p> : ''}
        </div>;
    }

    return (
      <div className="col-md-8 py-5 px-5 strain-profile">
        <div className="strain-profile-body">
          {strainProfile}
          {positiveEffects}
          {negativeEffects}
        </div>
      </div>
    );
  }
}

export default StrainProfile;