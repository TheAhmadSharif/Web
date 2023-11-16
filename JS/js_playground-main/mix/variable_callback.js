/*
	https://www.youtube.com/watch?v=tlUoKHCnUtQ
	26 February 2023
*/
function test() {

}

const test_1 = test;

test.prop = 1;
console.log(test);

console.log(test_1 == test);