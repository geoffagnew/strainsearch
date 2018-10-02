import React, { Component } from 'react';
import ContentBlock from '../ContentBlock/ContentBlock';
import ApiKey from '../../config';

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

  componentDidMount() {
    let strainId;
    const { id } = this.props.match.params;

    let fetchResult = fetch(`http://strainapi.evanbusse.com/${ApiKey}/strains/search/name/${id}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        strainName: id,
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

  // componentDidUpdate(prevProps, prevState) {
  //   const { id } = this.props.match.params;
  //   if (prevState.strainName !== id) {
  //     this.setState(() => ({ strainName: id}));
  //   }
  // }

  render() {

    const { strainName, strainDetails, strainEffects, strainFlavors, isLoaded } = this.state;

    let strainProfile,
        positiveEffects,
        negativeEffects,
        flavors;

    if(!isLoaded) {
      strainProfile = <p>Data is loading</p>;
    } else {
      strainProfile = 
        <div>
          <h1>{strainName}</h1>
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
      <div className="col-md-8 py-5 px-4">
        {strainProfile}
        {flavors}
        {positiveEffects}
        {negativeEffects}
      </div>
    );
  }
}

export default StrainProfile;