import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './ResultSidebar.css';

const ResultSidebar = (props) => {
  return (
    <div className = {classes.ResultSidebar}>
        <NavLink 
            to        = "/home"
            className = {classes.Button}
        >
            <span className = {classes.Text}>BACK</span>
        </NavLink>
    </div>
  );
}

export default ResultSidebar;