import React from 'react';
import classes from './Search.css';

const Search = (props) => {
  return (
    <div className = {classes.SearchContent}>
        <span className = {classes.SearchHeading}>Select Playing 9</span>
        <div className = {classes.Block}>
          <div className = {classes.SearchBlock}> 
            <img 
              src = "assets/images/magnifying-glass.svg"
              className = {classes.Image}
              alt = 'search'
            />
            <input 
              type = "text" 
              placeholder = "Search players" 
              className = {classes.SearchInput}
              onChange = {props.search}
            />                
          </div>
          <button 
            className = {classes.Button}
            onClick = {props.sort}
          >sort by price</button>
        </div>
    </div>   
  );
}

export default Search;
