let state = [{
	"product": {
		"id": "1",
		"name": "Test1"

	},
	"quantity": 1
}]
const action = {
	payload: {
		quantity: 1
	}
}

const objIndex = state.findIndex((obj => obj.product.id == "1"));
if(objIndex > -1) {
	state[objIndex].quantity = action.payload.quantity + 1;
}

console.log(state);