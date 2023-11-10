/** @format
 * @description
 * Student instructions:
 *
 * Copy paste your code from the ListPlayers.jsx file here from the react player fetch exercise
 * BEWARE: Only the selectPlayer function is passed as a prop from now on. The players data is fetched from the redux store.
 *
 */
import { ListPlayer } from './ListPlayer.jsx';
import { useSelector, useDispatch } from 'react-redux';
import React, {  useEffect } from 'react';
import { setPlayers } from '../redux/actionCreators/playersActions.js';
import { REQ_STATUS, SET_PLAYERS } from '../redux/constants';


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

			dispatch({
				type: "SET_REQUEST_STATUS",
				payload: REQ_STATUS.success
			})

			


         })
         .catch((err) => {

			dispatch({
				type: "SET_REQUEST_STATUS",
				payload: "An error has occurred!!!"
			})

			dispatch(setStatus(REQ_STATUS.loading))

			
         });
	  }, [player_list.length]);




	return (
		<div>
			<h2>List of players</h2>
			<ul id="players-list">

				{player_list && player_list.map(obj =>
                       <ListPlayer name={obj.name} id={obj.id} key={obj.id} onClick={selectPlayer}/>
                    )}
			</ul>
		</div>
	);
};
