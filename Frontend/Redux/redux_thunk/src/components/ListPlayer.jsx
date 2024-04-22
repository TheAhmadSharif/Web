/** @format
 * Copy paste your code from the ListPlayer.jsx file here from the previous exercise
 * BEWARE: Only name and id are passed to this component as props. All the other data is fetched and updated in the redux store.
 *
 * Here are the thunks that you can use to update the redux store:
 * - getSelectedPlayer, found in src\redux\actionCreators\thunks\ListPlayer.jsx
 */

import React, { useState,  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { REQ_STATUS  } from '../redux/constants.js';

export const ListPlayer = ({ name, id, onClick }) => {

	const api = 'http://localhost:3001/';
	const dispatch = useDispatch();
	
	function getplayer(id) {
		fetch(`${api}api/players/${id}`)
			 .then((res) => res.json())
			 .then((data) => {
				dispatch({
					type: "SET_REQUEST_STATUS",
					payload: REQ_STATUS.loading
				})
	
				// dispatch(setPlayers(data))
	
				dispatch({
					type: "SET_SELECTED_PLAYER",
					payload: data
				})

				
	
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
			 });
	}

	return (
		<li role="listitem" key={id} id={'player-' + id}>
			<a role="link" onClick={() => getplayer(id)} href={'#' + id}> 
			{name}</a>
	    </li>
	);
};
