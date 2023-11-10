/** @format
 *
 * Student instructions:
 * Copy contents for this file from the react_redux exercise
 *
 * BEWARE: No props are passed to this component from now on. Instead, all the data is fetched and updated in the redux store.
 *
 * Here are the thunks that you can use to update the redux store:
 * - postPlayer, found in src\redux\actionCreators\thunks\AddPlayer.jsx
 */

export const AddPlayer = () => {
	return (
		<div>
			<form onSubmit={null}>
				<h3>Add Player</h3>
				<input 
				type="text" 
				name="name"
				id="input-player"
				ref={null} 
				placeholder="Add Player"
				onChange={null}
				 /> <br />
				<button type="submit" role="button" onClick={null}>Submit</button>
			</form>
		</div>
	);
};
