import * as actionTypes from './actionType';
import gameLogic from '../gameLogic';

const initialState = {
    players: [],
    selectedPlayers: [],
    opposingBet: 0
}

const gameReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_PLAYERS:
            return {
                ...state,
                players: action.players.map(player => {
                    return {
                        ...player,
                        level: 0,
                        wins: 0,
                        lost: 0,
                        fate: 'NIL'
                    }
                })
            }
        case actionTypes.SELECT_PLAYER:
            const selectedPlayer = state.players.find(player => player.Name === action.playerName);
            const ifPlayerExists = state.selectedPlayers.some(player => player.Name === action.playerName);
            let updatedSelectedPlayers = [];
            if(ifPlayerExists){
                updatedSelectedPlayers = state.selectedPlayers.filter(player => player.Name !== selectedPlayer.Name)
            }else{
                if(state.selectedPlayers.length < 9)
                    updatedSelectedPlayers = state.selectedPlayers.concat(selectedPlayer)
                else    
                    updatedSelectedPlayers = state.selectedPlayers
            }
            return {
                ...state,
                selectedPlayers: updatedSelectedPlayers
            }
        case actionTypes.START_GAME:
            const opposingBet = action.opposingBet;
            const selectedPlayers = gameLogic(opposingBet, state.selectedPlayers);
            const players = state.players.map(player => {
                if(player.Bet == action.opposingBet)
                    player.fate = 'WIN';
                else
                    player.fate = 'LOSS';

                let selectedPlayer = selectedPlayers.filter(selectedPlayer => selectedPlayer.Name === player.Name)
                if(selectedPlayer[0]){
                    return selectedPlayer[0];
                }
                else{
                    return player;
                }
            })
            return {
                ...state,
                players: [...players],
                selectedPlayers: [...selectedPlayers],
                opposingBet: opposingBet
            }
        default:
            return state
    }
}

export default gameReducer;