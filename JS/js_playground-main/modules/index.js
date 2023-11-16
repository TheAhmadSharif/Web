export default class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}
export function printName(user) {
	console.log(`User Name is ${user.name}`);
}
export function printAge(user) {
	console.log(`User Name is ${user.age}`);
}


export default User;

export {printName, printAge}


function add(x, y) {
   return x + y;
}
module.exports = { add }