import React from 'react';
import { Link } from 'react-router-dom';
import './FilterBlock.scss';

const FilterBlock = (props) => (
  <div id="filterblock">
    {props.filterHead !== null ? 
    <h1 className="font-weight-bold h2 mb-3 mt-0">{props.filterHead}</h1>
    : ''}
    <h2 className="h5 mb-3">{props.filterSubhead}</h2>
    {props.filterOptions.map((option) => 
        <Link key={option} to={`/effects/${option}`} className="btn btn-outline-primary btn-sm mr-2 mb-2">{option}</Link>
    )}
  </div>
);

export default FilterBlock;