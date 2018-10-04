import React from 'react';
import './StrainFilterButtons.scss';
import FilterButtonSmall from '../FilterButtonSmall/FilterButtonSmall';

const StrainFilterButtons = (props) => (
  <ul className="strain-list p-4">
    <FilterButtonSmall btnText="Indica" />
    <FilterButtonSmall btnText="Sativa" />
    <FilterButtonSmall btnText="Hybrid" />
  </ul>
);

export default StrainFilterButtons;