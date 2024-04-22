/**
 * Implement the reducer for your redux store.
 */

import * as actions from './actionTypes.js';
/**
 * Get the new state of the application after the action is performed on the previous state
 *
 * The application state is an array of players where each player is an object
 * having the following structure:
 *
 *   {
 *     id: 2,  // Player id (positive integer, unique among all players)
 *     name: 'Player Name',  // Player name (string)
 *     isActive: false  // Player status (boolean)
 *   }
 *
 * The id of each player should be unique. When adding and removing players
 * you need to ensure this. How you choose to do this is up to you but array
 * index is not adequate. Also notice that the IDs should be positive integers
 * which means that zero is not allowed.
 *
 * The reducer should be able to accept and consume action object created by the
 * action creator functions you created in actionCreators.js
 *
 * Return the previous state unmodified if the action is of unknown type or
 * otherwise invalid.
 *
 * Use the constants from actionTypes.js to match the type value of the
 * action object. Don't use the plain string values directly!
 *
 * REMEMBER TO ALWAYS RETURN A NEW COPY OF THE STATE WHEN THE STATE IS MODIFIED!!
 *
 * @param {Array} state previous application state (array of players)
 * @param {object} action action object with keys 'type' and 'payload'
 * @returns {Array} the new state of the application
 */

const playersReducer = (state = [], action) => {
    switch(action.type) {
        case actions.ADD_PLAYER :
           // const uniq = Math.random().toString(16).slice(2)
            var uniq = new Date().getUTCMilliseconds();

            let player = {
                ...action.payload,
                id: uniq
            }

            console.log(player)
            return [...state, player];
        case actions.REMOVE_PLAYER :
            console.log(action.payload.id);
            const after_delete = state.filter(obj => obj.id.toString() !== action.payload.id.toString());
            console.log(after_delete);
            return after_delete;
        case actions.TOGGLE_PLAYER_STATUS :
            const id = action.payload.id;

            return state.map(obj => {
                if (obj.id === id) {
                  return {
                        ...obj, 
                        isActive: !obj.isActive
                    }
                };
                return obj;
              });

        default: 
            return state;
    }
};

export default playersReducer;