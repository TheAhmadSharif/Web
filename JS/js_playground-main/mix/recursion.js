/* 
	Date: 19 April 2022, Thursday
*/


function sum(n) {
	if(n == 0 ) {
		return 0;
	} else {
		return sum(n-1) + n;
	}
}
console.log(sum(10));


function permutation(n) {
	if(n == 0 ) {
		return 1;
	} else {
		return permutation(n - 1) * n;
	}
}

/* Stack */
console.log(permutation(5));

console.log('__________');



function memoize(callback) {
	let cache = {}
	return function(n) {
		if(n in cache) {
			return cache[n];
		} else {
			let result = callback(n)
			cache[n] = result;
			return result;
		}
	}
}
function fibonicci(n) {
	if( n <= 2 ) {
		return n;
	} else {
		return fibonicci(n-1)+ fibonicci(n-2);
	}	
}

var start = new Date();

for(let i = 0; i < 39; i++) {
	 fibonicci(i);
	// const _fibonicci = memoize(fibonicci);
	// _fibonicci(i)
	// console.log(_fibonicci(i));
}

console.log(new Date() - start);