import React from 'react';
import StrainListItem from '../StrainListItem/StrainListItem';

const StrainList = (props) => {

  // define strainsList variable to hold all strains from the array.map function below, and then displayed on the page
  let strainsList;

  if(props.strains.length > 0) {
    strainsList = props.strains.map((strain) =>
      <StrainListItem 
        key={strain.id}
        effectId={props.effectId}
        strainName={strain.name}
        strainRace={strain.race}
        strainEffect={strain.effect}
      />
    );
  } else {
    strainsList = <p>Data is loading.</p>;
  }

  return (
    {strainsList}
  );

}

export default StrainList;

<StrainList strains={this.state.strains} effectId={this.state.effectId} />