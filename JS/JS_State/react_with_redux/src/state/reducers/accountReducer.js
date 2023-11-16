import { DEPOSIT, WITHDRAW } from '../../constant.js';
const accountReducer = (state = 0, action) => {
	switch(action.type) {
		case DEPOSIT:
			console.log(action.payload, '_________-')
			return state + action.payload;
		case WITHDRAW:
			return state - action.payload;
		default: 
			return state;
	}
}
export default accountReducer;