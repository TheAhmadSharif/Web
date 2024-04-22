/** @format
 * Copy paste your code from the ListPlayers.jsx file here from the previous exercise
 *
 * BEWARE: No props are passed to this component from now on. Instead, all the data is fetched and updated in the redux store.
 *
 * Here are the thunks that you can use to update the redux store:
 * - getPlayers, found in src\redux\actionCreators\thunks\ListPlayers.jsx
 */

import { ListPlayer } from './ListPlayer.jsx';
import { useSelector, useDispatch } from 'react-redux';
import React, {  useEffect } from 'react';
import { setPlayers } from '../redux/actionCreators/playersActions.js';
import { setStatus } from '../redux/actionCreators/statusActions.js';
import { SET_PLAYERS, REQ_STATUS, SET_REQUEST_STATUS } from '../redux/constants';


export const ListPlayers = ({ players, selectPlayer }) => {

	const api = 'http://localhost:3001/';
	const dispatch = useDispatch();
	const player_list = useSelector((state) => state.players);


	useEffect(() => {
		fetch(`${api}api/players`)
         .then((res) => res.json())
         .then((data) => {
			dispatch({
				type: "SET_REQUEST_STATUS",
				payload: REQ_STATUS.loading
			})
			dispatch(setPlayers(data));
			dispatch(setStatus(SET_REQUEST_STATUS));

         })
         .catch((err) => {

			dispatch({
				type: "SET_REQUEST_STATUS",
				payload: "An error has occurred!!!"
			})

			
         });
	  }, [player_list.length]);




	return (
		<div>
			<h2>List of players</h2>
			<ul id="players-list">

				{player_list && player_list.map(obj =>
                    <ListPlayer 
					   name={obj.name} 
					   id={obj.id} 
					   key={obj.id} 
					   onClick={selectPlayer}/>
                    )}
			</ul>
		</div>
	);
};
