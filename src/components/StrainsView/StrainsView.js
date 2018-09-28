import React, { Component } from 'react';
import ContentBlock from '../ContentBlock/ContentBlock';
import StrainProfileTest from '../StrainProfileTest/StrainProfileTest';
import { Link, Route } from 'react-router-dom';
// import ApiKey from '../../config';

class StrainsView extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   strains: [],
    //   urlParam: this.props.match.params.id
    // };
  }

  render() {

    return (
      <ContentBlock>
        <div className="container">
          <div className="row my-5">
            <div className="col-md-12">
              <h1>Effect type</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 strain-list-wrapper p-4">
              <ul className="strain-list pl-0">
                <li><Link to="/effects/creative/strain/strain-one">Strain one test</Link></li>
                <li><Link to="/effects/creative/strain/strain-two">Strain two test</Link></li>
                <li><Link to="/effects/creative/strain/strain-three">Strain three test</Link></li>
              </ul>
            </div>
            <Route 
              path="/effects/creative/strain/:id" 
              render={(props) => <StrainProfileTest {...props} />}
            />
            
          </div>
        </div>
      </ContentBlock>
    );
  }
}

export default StrainsView;