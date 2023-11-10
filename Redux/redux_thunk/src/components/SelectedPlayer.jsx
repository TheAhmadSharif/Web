/** @format 
 * 
 *
  Copy paste your code from the SelectedPlayer.jsx file here from the previous exercise.

	BEWARE: No props are passed to this component from now on. Instead, all the data is fetched and updated in the redux store.

	Here are the thunks that you can use to update the redux store:
	- deleteSelectedPlayer, found in src\redux\actionCreators\thunks\SelectedPlayer.jsx
	- updateSelectedPlayer, found in src\redux\actionCreators\thunks\SelectedPlayer.jsx

*/

import { useSelector } from 'react-redux';
import React, { useState } from 'react';

export const SelectedPlayer = () => {
	const [btnToggle, setbtnToggle] = useState(true);
	let click_no = 0;

	function handleChange(event) {
		click_no = click_no + 1;
		if (click_no % 2 == 0) {

		}

	}
	function OnHandleDelete() {
	}
	function OnHandleUpdate() {
	}

	const mystyle = {
		opacity: 1,
		width: "40px",
		height: "40px",
		position: "relative"
	};

	const btnSTyle = {
		background: "green"
	}

	const player = useSelector((state) => state.selectedPlayer);
	if (!player.hasOwnProperty('name')) {
		return null;
	} else {
		return (
			<div id="selected-player">
				<h3>Selected Player</h3>
				<div className="player-id">{player.id}  </div>
				<div id="player-name">{player.name}  </div>


				<div id="player-status">
					

					<label id="checkbox-label">
						{player.isActive === false ? "inactive" : "active"}
						<input type="checkbox"
							name="checkbox-label"
							style={mystyle}
							role="checkbox"
							id="checkbox"
							onChange={handleChange}
							checked={player.isActive}
						/>
					</label>


				</div>
				<div>
					<button
						role="button"
						onClick={null}
						className="btn-update"
						disabled={btnToggle}
						style={btnSTyle}>Update</button>


					<button
						role="button"
						onClick={null}
						className="btn-delete">Delete</button>
				</div>

			</div>
			
		);
	}

	
};
