import React from 'react';
import './StrainFilterButtons.scss';
import FilterButtonSmall from '../FilterButtonSmall/FilterButtonSmall';

const StrainFilterButtons = (props) => (
  <div className="strain-list p-4">
    <FilterButtonSmall btnText="Indica" toggleStrains={props.onClick} />
    <FilterButtonSmall btnText="Sativa" />
    <FilterButtonSmall btnText="Hybrid" />
  </div>
);

export default StrainFilterButtons;