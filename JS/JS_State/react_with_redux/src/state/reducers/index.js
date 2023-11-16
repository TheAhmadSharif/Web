
import { combineReducers } from 'redux';
import accountReducer from './accountReducer.js';
import postReducer from './postReducer.js';

const reducers = combineReducers({
	account: accountReducer,
	post: postReducer
});
export default reducers;