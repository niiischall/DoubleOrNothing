import React from 'react';
import {useSelector} from 'react-redux';
import classes from './Counter.css';

const Counter = (props) => {
 
  const opposingBet = useSelector(store => store.opposingBet);

  return (
    <React.Fragment>
        <div 
            style = {{
                width: '40%', 
                display: 'flex', 
                position: 'relative'
            }}
        >
            <hr className = {classes.hrOne} />
            <span className = {classes.BoxOne}>&nbsp;</span>
        </div>
        <div className = {classes.OpposingBet}>
            <span className = {classes.OpposingBetText}>{opposingBet}</span>
        </div>
        <div style = {{
            width: '40%', 
            display: 'flex', 
            position: 'relative'
        }}>
            <span className = {classes.BoxTwo}>&nbsp;</span>
            <hr className = {classes.hrTwo} />
        </div>
    </React.Fragment>
  );
}

export default Counter;