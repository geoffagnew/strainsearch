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

    fetch(`http://strainapi.evanbusse.com/${ApiKey}/strains/search/name/${this.state.urlParam}`)
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then(data => this.setState({ strainDetails: data, isLoaded: true }))
      .catch(err => console.log(`Something went wrong ${err}`));
  }

  render() {

    const { isLoaded, strainDetails } = this.state;

    let strainProfile;

    if(!isLoaded) {
      strainProfile = 'Data is loading';
    } else {
      strainProfile = 
        <div>
          <p>{strainDetails[0].race}</p>
          <p>{strainDetails[0].desc}</p>
        </div>;
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