import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './styles.css';

import *  as actions from '../store/action';

import Sidebar from '../components/Sidebar/Sidebar';
import Search  from '../components/Search/Search';
import Grid from '../components/Grid/Grid';
import ToggleBox from '../components/ToggleBox/ToggleBox';

const Home = (props) => {
  const dispatch = useDispatch();
  const players = useSelector(store => store.players);

  const [ allPlayers, setAllPlayers ] = useState([]);
  const [ shownPlayers, setShownPlayers ] = useState([]);
  const [ searchedPlayer, setSearchedPlayer ] = useState('');
  const [ index, setIndex ] = useState(0);
  const [ lowerLimit, setLowerLimit ] = useState(10);


  useEffect(() => {
    if(players.length === 0)
      dispatch(actions.getPlayers());
  }, []);

  const fillShownPlayer = (lowerLimit, upperLimit) => {
    if(allPlayers.length > 0){
      const fetchedPlayers = allPlayers.filter((player, index) => index >= lowerLimit && index < upperLimit);
      setShownPlayers(fetchedPlayers);
    }
  }

  useEffect(() => {
    setAllPlayers(players);
  }, [players]);

  useEffect(() => {
    if(searchedPlayer){
      fillShownPlayer(0, 30);
    }
    else{
      setLowerLimit(10);
      fillShownPlayer(0, 10);
    }
  }, [allPlayers]);

  useEffect(() => {
    let searchedPlayers = players.filter(player => player.Name.includes(searchedPlayer));
    setAllPlayers(searchedPlayers);
  }, [searchedPlayer]);

  const searchPlayer = (searchQueryEvent) => {
    setSearchedPlayer(searchQueryEvent.target.value);
  }

  const changeIndexHandler = (input) => {
    if(input === 'PREV' && index > 0){
      setIndex(prevState => prevState - 1);
    }else if(input === 'NEXT' && index < 2){
      setIndex(prevState => prevState + 1);
    }
  }

  useEffect(() => {
    if(index === 0){
      setLowerLimit(10)
      fillShownPlayer(0, 10);
    }else if(index === 1){
      setLowerLimit(20)
      fillShownPlayer(10, 20);
    }else if(index === 2){
      setLowerLimit(30)
      fillShownPlayer(20, 30);
    }
  }, [index]);

  const selectionHandler = (playerName) => {
    dispatch(actions.selectPlayer(playerName));
  }

  const sortByPrice = () => {
    let sortedPlayers = players.sort((playerOne, playerTwo) => {
      return playerOne.Price - playerTwo.Price;
    });
    setAllPlayers(sortedPlayers);
    fillShownPlayer(0, 10);
    setIndex(0);
  }

  return (
    <React.Fragment>
        <div className = {classes.Home}>
            <Sidebar />
            <div className = {classes.Content}>
              <Search 
                search = {searchPlayer} 
                sort = {sortByPrice}
              />
              <div className = {classes.MainContent}>
                <Grid 
                  players = {shownPlayers}
                  selectPlayer = {selectionHandler}
                />
                <div className = {classes.MainFooter}>
                  <ToggleBox toggle = {changeIndexHandler} count = {lowerLimit} />
                </div>
              </div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Home;
