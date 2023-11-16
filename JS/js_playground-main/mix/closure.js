function getCapital(capital) {
	return function(interest) {
		return (capital * interest)/100;
	}

}
const profit = getCapital(12000);
console.log(profit(25));



/* 
	Closures 
	https://www.youtube.com/watch?v=3a0I8ICR1Vg
*/



const name ="James Bond";

function printName() {
	console.log(name);
}

printName()


