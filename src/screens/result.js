import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import classes from './styles.css';

import ResultSidebar from '../components/ResultSidebar/ResultSidebar';
import Counter from '../components/Counter/Counter';
import Card from '../components/Card/Card';

const Result = (props) => {
  const [redirect, setRedirect] = useState(false);
  const selectedPlayers = useSelector(store => store.selectedPlayers);

  useEffect(() => {
    if(selectedPlayers.length !== 9)
      setRedirect(true);
  }, []);

  return (
    <div className = {classes.Result}>
      <Route>
        { redirect && <Redirect to = "/home" />}
      </Route>
      <ResultSidebar />
      <div className = {classes.ResultContent}>
        <div className = {classes.ContentFirst}>
          {
            selectedPlayers.map((player, index) => {
              let card = null;
              if(index <= 4)
                card = <Card key = {index} player = {player} />
              return card;
            })
          }
        </div>
        <div className = {classes.ContentSecond}>
          <Counter/>
        </div>
        <div className = {classes.ContentThird}>
          {
            selectedPlayers.map((player, index) => {
              let card = null;
              if(index > 4)
                card = <Card key = {index} player = {player} />
              return card;
            })  
          }
        </div>
      </div>
    </div>
  );
}

export default Result;
