import React, { Component } from 'react';
import ApiKey from '../../config';
import StrainIcon from '../StrainIcon/StrainIcon';
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
    fetch(`http://strainapi.evanbusse.com/${ApiKey}/strains/search/name/${urlParams}`)
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

    let strainProfile;

    if(!isLoaded) {
      strainProfile = <p>Data is loading</p>;
    } else {
      strainProfile = 
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <h2>{strainName}</h2>
              <p className="capitalize"><StrainIcon strainName={strainDetails[0].race} iconSize="25px" /> {strainDetails[0].race}</p>
              <p>{strainDetails[0].desc}</p>
            </div>
          </div>
          
          <div className="row">
              {strainFlavors.length > 0 ? 
                <div className="col-md-12">
                  <h4 className="h6 font-weight-bold">Flavors: {strainFlavors}</h4> 
                </div>
              : ''}
              {strainEffects.positive.length > 0 ? 
                <div className="col-md-4">
                  <h4 className="h6 font-weight-bold">Positive:</h4> 
                  <ul className="strain-list">
                    {strainEffects.positive.map((strain) => <li>{strain}</li>)}
                  </ul>
                </div>
              : ''}
              {strainEffects.negative.length > 0 ? 
                <div className="col-md-4">
                  <h4 className="h6 font-weight-bold">Negative:</h4>
                  <ul className="strain-list">
                    {strainEffects.negative.map((strain) => <li>{strain}</li>)}
                  </ul>
                </div> 
              : ''}
              {strainEffects.medical.length > 0 ? 
                <div className="col-md-4">
                <h4 className="h6 font-weight-bold">Medicinal:</h4>
                <ul className="strain-list">
                  {strainEffects.medical.map((strain) => <li>{strain}</li>)}
                </ul>
                </div>
              : ''}
          </div>
        </div>;
    }

    return (
      <div className="col-md-8 py-5 px-5 strain-profile">
        <div className="strain-profile-body">
          {strainProfile}
        </div>
      </div>
    );
  }
}

export default StrainProfile;