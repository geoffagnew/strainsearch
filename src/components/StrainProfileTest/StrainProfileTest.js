import React, { Component } from 'react';
import ContentBlock from '../ContentBlock/ContentBlock';
import ApiKey from '../../config';

class StrainProfileTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      strainName: null, 
      isLoaded: false
    };
  }
  
  componentDidMount() {
    let strainId;
    const urlParam = this.props.match.params.id;
    console.log(urlParam);
    this.setState({
      strainName: urlParam,
      isLoaded: true
    });
  }

  // componentDidUpdate(prevState) {
  //   const newUrlParam = this.props.match.params.id;
  //   if (prevState.strainName !== newUrlParam) {
  //     return {
  //       strainName: newUrlParam
  //     };
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   const urlParam = this.props.match.params.id;
  //   console.log(urlParam);
  // }

  render() {

    const { isLoaded, strainName } = this.state;
    let strainProfile;

    if(!isLoaded) {
      strainProfile = <p>Data is loading</p>;
    } else {
      strainProfile = 
        <div>
          <h2>{strainName}</h2>
          <p>{isLoaded ? 'Loaded' : 'Not Loaded'}</p>
        </div>;
    }

    return (
      <div className="col-md-8 py-5 px-4">
        {strainProfile}
      </div>
    );
  }
}

export default StrainProfileTest;