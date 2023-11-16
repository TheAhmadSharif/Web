/* 
	Date: 19 April 2022, Thursday
*/

const memoize = func => {
	const results = {};
	return (...args) => {
		 const argsKey = JSON.stringify(args);
		 if(!results[argsKey]){
		 	results[argsKey] = func(...args);
		 	console.log(results[argsKey], '________11');
		 }
		return results[argsKey];
	}
}

const inefficient = memoize(num => {
	let total  = 0;
	for (let i = 0; i < num; i++) {
		total = total + 1;
	}
	return total;
});




const start_1 = new Date();
inefficient(5)

console.log(new Date() -  start_1);



const start_2 = new Date();
inefficient(5)
console.log(new Date() -  start_2);
