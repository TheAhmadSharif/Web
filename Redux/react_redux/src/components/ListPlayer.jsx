/** @format
 *
 * @description
 * Student instructions:
 *
 * Copy contents for this file from the players_fetch exercise of the react week. There are no changes to this file otherwise
 *
 *
 *
 */
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPlayer } from '../redux/actionCreators/selectedPlayerActions.js'
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
	
	
				dispatch(setSelectedPlayer(data));

				
	
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
			<a role="link" href='#' onClick={() => getplayer(id)}>{id} {name}</a>
	    </li>
	);
};