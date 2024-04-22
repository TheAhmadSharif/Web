/** @format
 * @description
 * Student instructions:
 * Copy contents for this file from the react_fetch exercise of the react week.
 *
 * BEWARE: No props are passed to this component from now on. Instead, the selectedPlayer is fetched from the redux store.

 */
import { useSelector } from 'react-redux';

export const SelectedPlayer = () => {

	const player = useSelector((state) => state.selectedPlayer);
	if (!player.hasOwnProperty('name')) {
		return null;
	} else {
		return (
			<div id="selected-player">
				<h3>Selected Player</h3> 
				<span id="player-name">{ player.name }  </span> 
				<div id="player-status">
				{ player.isActive === false ? "inactive" : "active" }
				</div>
			</div>
			
		);
	}

	
};
