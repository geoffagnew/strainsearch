import React, { Component } from 'react';
import ContentBlock from '../ContentBlock/ContentBlock';
import StrainListItem from '../StrainListItem/StrainListItem';
import './AllStrains.scss';
// import ApiKey from '../../config';

class AllStrains extends Component {
  constructor(props) {
    super(props)
    this.state = {
      strains: []
    };
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/data/creative-strains.json')
      .then((response) => response.json())
      // .then((data) => console.log(data))
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
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>All strains</h1>
            </div>
          </div>
        </div>
        <ContentBlock>
          <div className="row">
            <div className="col-md-12">
              <ul className="strain-list pl-0">
                {strainsList}
              </ul>
            </div>
          </div>
        </ContentBlock>
      </div>
    );
  }
}

export default AllStrains;