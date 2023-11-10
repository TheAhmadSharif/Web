/** @format THUNK*/

/**
 * @description thunk for posting a new player.
 * Upon starting, Dispatches
 * - setStatus-action with REQ_STATUS[loading]-string as param
 * If Fetch is successful, Dispatches:
 * - setStatus-action with REQ_STATUS[success] string as param,
 * - addPlayer-action with returned player-object
 * - clearSelectedPlayer-action with no parameters
 *
 *  Else Fetch fails, Dispatches:
 * - setStatus-action with REQ_STATUS[error] string as param
 * @param {Object} newPlayer -  The player to be added
 * @return {Function} - thunk with dispatch as param
 */
import { setPlayers } from '../redux/actionCreators/playersActions.js';
import { setStatus } from '../redux/actionCreators/statusActions.js';
import { SET_PLAYERS, REQ_STATUS, SET_REQUEST_STATUS } from '../redux/constants';
export const postPlayer = (newPlayer) => {

    dispatch(setPlayers(newPlayer));
};
