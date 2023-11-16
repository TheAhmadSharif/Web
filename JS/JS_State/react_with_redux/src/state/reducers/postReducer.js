import { SET_ITEM, ADD_ITEM } from '../../constant.js';
const postReducer = (state = [], action) => {
	switch(action.type) {
		case SET_ITEM:
			return action.payload;
		case ADD_ITEM:
			return [...state, action.payload];
		default: 
			return state;
	}
}
export default postReducer;