/** @format
 * Copy paste your code from the RequestStatus.jsx file here from the previous exercise
 *
 * BEWARE: No props are passed to this component from now on. Instead, all the data is fetched and updated in the redux store.
 */
import { useSelector, useDispatch } from 'react-redux';
export const RequestStatus = () => {
	const dispatch = useDispatch();
	const set_status = useSelector((state) => state.status);
	

	return (
		<div>
			<h3>Request status</h3>
			<span id="request-status">{set_status}</span>
		</div>
	);
};
