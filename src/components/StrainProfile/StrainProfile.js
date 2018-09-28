import React, { Component } from 'react';
import ContentBlock from '../ContentBlock/ContentBlock';
import ApiKey from '../../config';

class StrainProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      strainDetails: null,
      strainEffects: null,
      strainFlavors: null,
      urlParam: this.props.match.params.id,
      isLoaded: false
    };
  }

  componentDidMount() {
    let strainId;

    let fetchResult = fetch(`http://strainapi.evanbusse.com/${ApiKey}/strains/search/name/${this.state.urlParam}`)
    .then(response => response.json())
    .then(data => {
      this.setState({ 
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

  render() {

    const { isLoaded, strainDetails, strainEffects, strainFlavors } = this.state;

    let strainProfile,
        positiveEffects,
        negativeEffects,
        flavors;

    if(!isLoaded) {
      strainProfile = <p>Data is loading</p>;
    } else {
      strainProfile = 
        <div>
          <p>{strainDetails[0].race}</p>
          <p>{strainDetails[0].desc}</p>
        </div>;
        
        if(strainFlavors.length > 0) {
          flavors = <p>Flavors: {strainFlavors}</p>;
        }
        if(strainEffects.positive.length > 0) {
          positiveEffects = <p>Positive: {strainEffects.positive}</p>;
        } 
        if(strainEffects.negative.length > 0) {
          negativeEffects = <p>Negative: {strainEffects.negative}</p>;
        } 
    }

    return (
      <ContentBlock>
        <div className="container">
          <div className="row my-5">
            <div className="col-md-12">
              <h1>{this.props.match.params.id}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 strain-list-wrapper py-5 px-4">
              {strainProfile}
              {flavors}
              {positiveEffects}
              {negativeEffects}
            </div>
            <div className="col-md-3 offset-md-1 strain-list-wrapper p-4">
              <p>Some cool as stuff goes here.</p>
            </div>
          </div>
        </div>
      </ContentBlock>
    );
  }
}

export default StrainProfile;