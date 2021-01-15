import * as apiUrls from '../apiUrls.js';
import * as actionTypes from './actionType';
import axios from 'axios';

export const getPlayers = () => {
    const apiURL = apiUrls.getPlayers;
    
    return dispatch => {
        axios.get(apiURL)
        .then((response) => {
            dispatch({
                type: actionTypes.GET_PLAYERS,
                players: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export const selectPlayer = (playerName) => {
    return {
        type: actionTypes.SELECT_PLAYER,
        playerName: playerName
    }
}

export const startGame = () => {
    return dispatch => {
        const min = Math.ceil(1);
        const max = Math.floor(9);
        const opposingBet = Math.floor(Math.random() * (max - min + 1)) + min;
        dispatch({
            type: actionTypes.START_GAME,
            opposingBet: opposingBet
        })
    }
}