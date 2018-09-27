import React, { Component } from 'react';
import ContentBlock from '../ContentBlock/ContentBlock';
import ApiKey from '../../config';

class StrainProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      strain: null,
      urlParam: this.props.match.params.id
    };
  }

  componentDidMount() {
    fetch(`http://strainapi.evanbusse.com/${ApiKey}/strains/search/name/${this.state.urlParam}`)
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => this.setState({ strain: data }))
      .catch((err) => console.log(`Something went wrong ${err}`));
  }

  render() {

    let strainProfile;

    if(this.state.strain !== null) {
      strainProfile = this.state.strain[0].name;
    } else {
      strainProfile = 'Data is loading';
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
            <div className="col-md-8 strain-list-wrapper p-4">
              <ul className="strain-list pl-0">
                {strainProfile}
              </ul>
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