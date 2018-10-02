import React, { Component } from 'react';
import ContentBlock from '../ContentBlock/ContentBlock';
import ApiKey from '../../config';

// It works in regular stateless functions
// const StrainProfileTest = ({ match }) => {
//   return (
//     <div className="col-md-8 py-5 px-4">
//       <p>ID: {match.params.id}</p>
//     </div>
//   );
// };

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
    const { id } = this.props.match.params;
    this.setState(() => (
      { 
        strainName: id, 
        isLoaded: true 
      })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    if (prevState.strainName !== id) {
      this.setState(() => ({ strainName: id}));
    }
  }

  // componentDidUpdate(prevState) {
  //   const newUrlParam = this.props.match.params.id;
  //   if (prevState.strainName !== newUrlParam) {
  //     return {
  //       strainName: newUrlParam
  //     };
  //   }
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