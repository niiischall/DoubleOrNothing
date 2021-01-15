import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './NavButton.css';

import * as actions from '../../store/action';

const NavButton = (props) => {
  const dispatch = useDispatch();
  const selectedPlayers = useSelector(store => store.selectedPlayers);

  return (
    <div 
      className = {classes.ButtonContainer}
      onClick = {() => dispatch(actions.startGame())}
    >
      {
        selectedPlayers.length === 9
        ? <NavLink to = {props.route} className = {classes.ActiveButton}>
            <span className = {classes.Text}>START</span>
          </NavLink>
        : <NavLink to = '#' className = {classes.InactiveButton}>
            <span className = {classes.Text}>START</span>
          </NavLink>
      }
    </div>
  );
}

export default NavButton;