import React, { Component } from 'react';
import ContentBlock from '../ContentBlock/ContentBlock';
import StrainListItem from '../StrainListItem/StrainListItem';
import './AllStrains.scss';
import ApiKey from '../../config';

class AllStrains extends Component {
  constructor(props) {
    super(props)
    this.state = {
      strains: [],
      urlParam: this.props.match.params.id
    };
  }

  componentDidMount() {
    fetch(`http://strainapi.evanbusse.com/${ApiKey}/strains/search/effect/${this.state.urlParam}`)
      .then((response) => response.json())
      .then((data) => this.setState({ strains: data }))
      .catch((err) => console.log(`Something went wrong ${err}`));
  }

  render() {

    let strainsList;

    if(this.state.strains.length > 0) {
      strainsList = this.state.strains.map((strain) =>
        <StrainListItem 
          key={strain.id}
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
              <h1>{this.props.match.params.id}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 strain-list-wrapper p-4">
              <ul className="strain-list pl-0">
                {strainsList}
              </ul>
            </div>
            <div className="col-md-8 strain-list-wrapper p-4">
              <p>Some cool as stuff goes here.</p>
            </div>
          </div>
        </div>
      </ContentBlock>
    );
  }
}

export default AllStrains;