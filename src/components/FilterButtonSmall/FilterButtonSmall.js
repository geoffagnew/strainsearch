import React from 'react';
import './FilterButtonSmall.scss';

const FilterButtonSmall = (props) => (
    <li className="filter-btn"><a className="btn btn-outline-primary btn-sm mr-2 mb-2" href="#">{props.btnText}</a></li>
);

export default FilterButtonSmall;