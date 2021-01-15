import React from 'react';
import {useSelector} from 'react-redux';
import classes from './Sidebar.css';

import Logo from '../Logo/Logo';
import NavButton from '../Button/NavButton';

const Sidebar = (props) => {
  const selectedPlayers = useSelector(store => store.selectedPlayers);

  let content = null;
  if(selectedPlayers.length > 0){
    content = selectedPlayers.map(player => {
      return(
        <div key = {player.Name} className = {classes.Player}>
          <img src = {player['Profile Image']} className = {classes.Image} alt= "profile"/>
          <div className = {classes.TextBox}>
            <span className = {classes.Text}>{player.Name}</span>
            <div style = {{display: 'flex'}} >
              <span className = {classes.IconBox}>
                <img 
                  src = "assets/images/star.svg" 
                  className = {classes.TextIcon} 
                  alt = "Wins"
                />
                {player.wins}
              </span>
              <span className = {classes.IconBox}>
                <img 
                  src = "assets/images/view.svg" 
                  className = {classes.IconText} 
                  alt = "Bet"
                />
                {player.Bet}
              </span>
            </div>
          </div>
          <div className = {classes.PrizeBox}>
            <img src = "assets/images/diamond.svg" className = {classes.PrizeIcon} alt = "Prize" />
            <span className = {classes.PrizeText}>{player.Price}</span>
          </div>
        </div>
      )
    })
  }

  return (
    <div className = {classes.Sidebar}>
        <Logo />
        <div className = {classes.SidebarContent}>
          <span className = {classes.SidebarHeadline}>Playing 9</span>
          <div className = {classes.List}>
            {content}
          </div>
        </div>
        <NavButton route = "result" />
    </div>
  );
}

export default Sidebar;