import React from 'react';
import {useSelector} from 'react-redux';
import classes from './Card.css';

const Card = (props) => {
    const opposingBet = useSelector(store => store.opposingBet);
    return(
        <div 
            className = {
                props.player.Bet == opposingBet 
                ? classes.WinCard
                : classes.LossCard
            }
        >
            <div className = {classes.CardContent}>
                <div className = {classes.Profile}>
                    <img src = {props.player["Profile Image"]} className = {classes.Image} />
                    <div className = {classes.Textbox}>
                        <span className = {classes.Headline}>{props.player.Name}</span>
                        <span className = {classes.Level}>Level {props.player.level}</span>
                    </div>
                </div>
                <div className = {classes.Score}>
                    <div style = {{width: '100%', display: 'flex'}}>
                        <div className = {classes.ScoreBox}>
                            <img src = "assets/images/diamond.svg" className = {classes.IconLarge} />
                            <span className = {classes.Level}>
                                {props.player.Price}
                            </span>                       
                        </div>
                        <div className = {classes.ScoreBox}>
                            <img src = "assets/images/view.svg" className = {classes.IconSmall} />
                            <span className = {classes.Level}>{props.player.Bet}</span>
                        </div>
                    </div>
                </div>
                <div className = {classes.Score}>
                    <div className = {classes.ScoreBox}>
                        <img src = "assets/images/star.svg" className = {classes.IconLarge} />
                        <span className = {classes.Level}>{props.player.wins}</span>
                    </div>
                </div>
            </div>
            <div className = {
                props.player.Bet == opposingBet 
                ? classes.CardWinFooter
                : classes.CardLossFooter
            }>
                <span className = {classes.Text}>
                {
                    props.player.Bet == opposingBet 
                    ? 'WINNER'
                    : 'LOSS'
                }
                </span>
            </div>
        </div>
    )
}

export default Card;