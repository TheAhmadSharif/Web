import { SET_ITEM, ADD_ITEM, DEPOSIT, WITHDRAW } from '../../constant.js';
export const depositMoney = (amount) => {
	return (dispatch) => {
		dispatch({
			type: DEPOSIT,
			payload: amount
		})
	}
}
export const withdrawMoney = (amount) => {
	return (dispatch) => {
		dispatch({
			type: WITHDRAW,
			payload: amount
		})
	}
}
export const displayList = (data) => {
	return (dispatch) => {
		dispatch({
			type: SET_ITEM,
			payload: data
		})
	}
}

export const addItem = (data) => {
	return (dispatch) => {
		dispatch({
			type: ADD_ITEM,
			payload: data
		})
	}
}