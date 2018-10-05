import React from 'react';
import './FilterButtonSmall.scss';

const FilterButtonSmall = (props) => (
    <button onClick={props.toggleStrains} className="btn btn-outline-primary btn-sm mr-2 mb-2 filter-btn" id={props.customCssId}>{props.btnText}</button>
);

export default FilterButtonSmall;