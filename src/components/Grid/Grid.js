import React from 'react';
import {useSelector} from 'react-redux';
import classes from './Grid.css';

import CheckBox from '../Checkbox/Checkbox';

const Grid = (props) => {

    let content = null;

    const selectedPlayers = useSelector(store => store.selectedPlayers);

    const playerSelected = (playerName) => {
        return selectedPlayers.some(player => player.Name === playerName)
    }

    if(props.players.length > 0) {
        content = props.players.map(player => (
            <div key = {player.Name} className = {classes.GridContentRow}>
                <span className = {[classes.RowPill, classes.GridSmall].join(' ')}>
                    <CheckBox 
                        id = {player.Name}
                        checked = {playerSelected(player.Name)}
                        handleCheck = {() => props.selectPlayer(player.Name)}
                    />
                </span>
                <span className = {[classes.RowPill, classes.GridLarge].join(' ')}>
                    {player.Name}
                </span>
                <span className = {[classes.RowPill, classes.GridSmall].join(' ')}>
                    {player.level}
                </span>
                <span className = {[classes.RowPill, classes.GridSmall].join(' ')}>
                    <img 
                        src = {player["Profile Image"]} 
                        className = {classes.ProfilePicture} 
                        alt = {player.Name}
                    />
                </span>
                <span className = {[classes.RowPill, classes.GridSmall].join(' ')}>
                    {player.Bet}
                </span>
                <span className = {[classes.RowPill, classes.GridSmall].join(' ')}>
                    {player.wins}
                </span>
                <span className = {[classes.RowPill, classes.GridSmall].join(' ')}>
                    {player.lost}
                </span>
                <span 
                    className = {[classes.RowPill, classes.GridSmall].join(' ')}
                    style = {
                        player.fate === 'WIN' 
                        ? {color: 'var(--color-green)', fontWeight: '700'}
                        : player.fate === 'LOSS' 
                          ? {color: 'var(--color-red)', fontWeight: '700'}
                          : {color: 'var(--color-black)', fontWeight: '700'}
                    }
                >
                    {player.fate}
                </span>
                <span className = {[classes.RowPill, classes.GridMedium].join(' ')}>
                    {player.Price}
                </span>
            </div>
        ))
    }

    return(
        <div className = {classes.Grid}> 
            <div className = {classes.GridHeader}>
                <span className = {[classes.GridPill, classes.GridSmall].join(' ')}>select</span>
                <span className = {[classes.GridPill, classes.GridLarge].join(' ')}>player name</span>
                <span className = {[classes.GridPill, classes.GridSmall].join(' ')}>level</span>
                <span className = {[classes.GridPill, classes.GridSmall].join(' ')}>avatar</span>
                <span className = {[classes.GridPill, classes.GridSmall].join(' ')}>
                   <img 
                        src = "assets/images/view.svg" 
                        className = {classes.IconSmall} 
                        alt = "Bet"
                    />bet
                </span>
                <span className = {[classes.GridPill, classes.GridSmall].join(' ')}>
                    <img 
                        src = "assets/images/star.svg" 
                        className = {classes.IconMedium} 
                        alt = "Wins"
                    />wins
                </span>
                <span className = {[classes.GridPill, classes.GridSmall].join(' ')}>lost</span>
                <span className = {[classes.GridPill, classes.GridSmall].join(' ')}>fate</span>
                <span className = {[classes.GridPill, classes.GridMedium].join(' ')}>
                    <img 
                        src = "assets/images/diamond.svg" 
                        className = {classes.IconLarge} 
                        alt = "Price"
                    />price
                </span>
            </div>
            <div className = {classes.GridContent}>
                {content}
            </div>
        </div>
    )
}

export default Grid;