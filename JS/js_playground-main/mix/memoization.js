/* 
	Date: 19 April 2022, Thursday
*/

function memoize (value) {
	let cahce = {};
	return function(value) {
		if(value in cahce) {
			console.log('From cache');
			return cahce[value]
		} else {
			let result = value + 10;
			cahce[value] = result;
			console.log('Calculated Result');
			return result; 
		}
	}
}


const start_1 = new Date();


const newAdd = memoize();
console.log(newAdd(10));
console.log(newAdd(10));
console.log(newAdd(10));